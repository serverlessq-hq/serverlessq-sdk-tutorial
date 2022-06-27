import type { NextApiRequest, NextApiResponse } from "next";
import { EnqueueOptions, Queue } from "@serverlessq/nextjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queueId = "7a7acfbe-a40a-4f0d-b897-64143448b43d";
  const queue = new Queue(queueId);

  console.log("All env variables are:", process.env);

  const options: EnqueueOptions = {
    method: "GET",
    target: `https://${process.env.VERCEL_URL}/api/consumer`,
  };

  const response = await queue.enqueue(options);

  res.status(200).json({ ...response });
}
