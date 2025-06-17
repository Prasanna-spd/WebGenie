import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const { prompt } = await req.json();

//   const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;
//   const model = "black-forest-labs/FLUX.1-dev";

//   const res = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${HF_TOKEN}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       inputs: prompt,
//       parameters: {
//         guidance_scale: 7,
//         num_inference_steps: 30,
//         width: 512,
//         height: 512,
//       },
//     }),
//   });

//   if (!res.ok) {
//     return NextResponse.json({ error: "Failed to generate image" }, { status: 500 });
//   }

//   const imageBuffer = await res.arrayBuffer();
//   const base64Image = Buffer.from(imageBuffer).toString("base64");
//   const mimeType = res.headers.get("content-type") || "image/png";

//   return NextResponse.json({
//     image: `data:${mimeType};base64,${base64Image}`,
//   });
// }

// export async function POST(req: NextRequest) {
//   const { prompt } = await req.json();

//   try {
//     console.log(prompt);
//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.OPENROUTER_API_KEY!}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
//         messages: [
//           {
//             role: "user",
//             content: `
//             Generate image content for this idea: "${prompt}".
//             `,
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       const error = await response.text();
//       return NextResponse.json({ error: "Generation failed", detail: error }, { status: 500 });
//     }

//     const blob = await response.blob();
//     // const arrayBuffer = await blob.arrayBuffer();
//     // const buffer = Buffer.from(arrayBuffer);
//     // const base64Image = `data:image/png;base64,${buffer.toString("base64")}`;

//     return NextResponse.json({ image: blob }, { status: 200 });
//   } catch (err) {
//     // console.log(err)
//     console.error("Image generation error:", err);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }


// import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const response = await fetch("https://api.studio.nebius.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEBIUS_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "black-forest-labs/flux-schnell",
        response_format: "b64_json",
        response_extension: "png",
        width: 1024,
        height: 1024,
        num_inference_steps: 4,
        negative_prompt: "",
        seed: -1,
        prompt,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Image generation failed:", error);
      return NextResponse.json({ error: "Image generation failed", detail: error }, { status: 500 });
    }

    const result = await response.json();

    // console.log("the nebius result",result)

    // result.data[0].b64_json contains the base64 encoded image
    const base64Image = `data:image/png;base64,${result.data[0].b64_json}`;

    return NextResponse.json({ image: base64Image }, { status: 200 });
  } catch (err) {
    console.error("Image generation error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
