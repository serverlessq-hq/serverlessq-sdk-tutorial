import type { NextApiRequest, NextApiResponse } from "next";
import { EnqueueOptions, Queue } from "@serverlessq/nextjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queue = new Queue("d408f449-9689-4a05-b786-621b95e28078");

  const options: EnqueueOptions = {
    method: "GET",
    target: "https://mock.codes/200",
  };

  const response = await queue.enqueue(options);

  res.status(200).json({ ...response });
}
