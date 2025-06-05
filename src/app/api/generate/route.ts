// import { NextRequest, NextResponse } from "next/server";

// const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_KEY!;
// const MODEL = "mistralai/Mistral-7B-Instruct-v0.1";

// export async function POST(req: NextRequest) {
//   const { prompt } = await req.json();

//   if (!prompt) {
//     return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
//   }

//   try {
//     const huggingFaceRes = await fetch(`https://api-inference.huggingface.co/models/${MODEL}`, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         inputs: `Generate website content (title, subtitle, about, and CTA) for: "${prompt}"`,
//       }),
//     });

//     if (!huggingFaceRes.ok) {
//       const error = await huggingFaceRes.json();
//       console.error("Hugging Face API error:", error);
//       return NextResponse.json({ error: "Hugging Face API request failed." }, { status: 500 });
//     }

//     const data = await huggingFaceRes.json();
//     const generatedText: string = data[0]?.generated_text || "";

//     // Try to parse JSON object from generated text
//     const jsonMatch = generatedText.match(/{[\s\S]*}/);
//     const result = jsonMatch
//       ? JSON.parse(jsonMatch[0])
//       : {
//           title: "Generated Title",
//           subtitle: "Generated Subtitle",
//           about: "This is an auto-generated about section.",
//           cta: "Join Now",
//         };

//     return NextResponse.json(result);
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       console.error("Error:", err.message);
//     } else {
//       console.error("Unexpected error:", err);
//     }

//     return NextResponse.json({ error: "Failed to get content from Hugging Face." }, { status: 500 });
//   }
// }



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
          content: `Generate homepage content (title, subtitle, about, CTA) for this idea: "${prompt}"`,
        },
      ],
    });

    const content = chatCompletion.choices[0].message?.content ?? "";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error from Hugging Face:", error);
    return NextResponse.json({ error: "Failed to generate content from Hugging Face." }, { status: 500 });
  }
}
