import type { NextApiRequest, NextApiResponse } from "next";
import { enqueue, EnqueueOptions } from "@serverlessq/nextjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("All env variables", process.env);
  console.log("NODE_ENV env variable", process.env.NODE_ENV);
  console.log("VERCEL_URL env variable", process.env.VERCEL_URL);
  console.log("VERCEL_ENV env variable", process.env.VERCEL_ENV);
  console.log("VERCEL env variable", process.env.VERCEL);
  const options: EnqueueOptions = {
    method: "GET",
    target: "https://mock.codes/200",
  };
  const response = await enqueue(options);

  res.status(200).json({ ...response });
}
