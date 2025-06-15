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




export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    
    console.log(prompt)
    const response = await fetch("https://inference.api.nscale.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.genieImage_API_KEY!}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        response_format: "b64_json",
        prompt,
        model: "black-forest-labs/FLUX.1-schnell",
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error: "Generation failed", detail: error }, { status: 500 });
    }

    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = `data:image/png;base64,${buffer.toString("base64")}`;

    return NextResponse.json({ image: base64Image }, { status: 200 });

  } catch (err) {
    // console.log(err)
    console.error("Image generation error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
