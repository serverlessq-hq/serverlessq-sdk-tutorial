// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Queue, { EnqueuOptions, queue } from "@serverlessq/nextjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const options: EnqueuOptions = {
    method: "GET",
    target: "https://jsonplaceholder.typicode.com/users",
  };
  const response = await queue.enqueue(options);
  res.status(200).json({ ...response });
}
