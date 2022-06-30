import { NextApiRequest, NextApiResponse } from "next";
import testQueue from "./queue";

export default async function enqueue(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await testQueue.enqueue("GET");
    res.json({ ...result });
  } catch (e) {
    res.json({ status: "failed" });
  }
}
