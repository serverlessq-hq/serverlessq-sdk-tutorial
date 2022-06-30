import { NextApiRequest, NextApiResponse } from "next";
import testQueue from "./queue";

export default async function enqueue(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await testQueue.enqueue({ method: "GET" });
    res.json({ ...result });
  } catch (e) {
    console.log("error", e);
    res.json({ status: "failed" });
  }
}
