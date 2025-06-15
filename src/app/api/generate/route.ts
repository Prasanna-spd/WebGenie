import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY!);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  try {
    const chatCompletion = await client.chatCompletion({
      provider: "nebius",
      model: "Qwen/Qwen3-32B",
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
    });

    // const content = chatCompletion.choices[0].message?.content ?? "";

    // return NextResponse.json({ content });

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
