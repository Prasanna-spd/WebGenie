import { NextRequest, NextResponse } from "next/server";
// import { InferenceClient } from "@huggingface/inference";

// const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY!);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY} `,
        // "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        // "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
        messages: [
          {
            role: "user",
            content: `
            Generate homepage content for this idea: "${prompt}".
            
            Return the response strictly in the following JSON format without any explanation:
            
            {
              "title": "...",
              "subtitle": "...",
              "about": "...",
              "cta": "..."
            }
                  `.trim(),
          },
        ],
      }),
    });

    // const chatCompletion = await client.chatCompletion({
    //   provider: "nebius",
    //   model: "Qwen/Qwen3-32B",
    //   messages: [
    //     {
    //       role: "user",
    //       content: `
    // Generate homepage content for this idea: "${prompt}".

    // Return the response strictly in the following JSON format without any explanation:

    // {
    //   "title": "...",
    //   "subtitle": "...",
    //   "about": "...",
    //   "cta": "..."
    // }
    //       `.trim(),
    //     },
    //   ],
    // });

    // const content = chatCompletion.choices[0].message?.content ?? "";

    // return NextResponse.json({ content });

    const chatCompletion = await response.json();

    const raw = chatCompletion.choices[0].message?.content ?? "";

    // Flexible JSON detection
    const jsonStart = raw.indexOf("{");
    const jsonEnd = raw.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
      return NextResponse.json({ error: "No JSON object found in response." }, { status: 500 });
    }

    const jsonString = raw.slice(jsonStart, jsonEnd + 1);

    try {
      const parsed = JSON.parse(jsonString);
      return NextResponse.json({ content: parsed });
    } catch (error) {
      console.log(error);

      return NextResponse.json({ error: "Failed to parse extracted JSON." }, { status: 500 });
    }
  } catch (error) {
    console.error("Error from Hugging Face:", error);
    return NextResponse.json({ error: "Failed to generate content from Hugging Face." }, { status: 500 });
  }
}
