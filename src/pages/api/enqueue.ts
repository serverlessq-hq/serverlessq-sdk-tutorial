import { NextApiRequest, NextApiResponse } from "next";
import testQueue from "./queue";

export default async function enqueue(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await testQueue.enqueue("GET");

  if (result.message === "OK") {
    res.send("OK");
  }
  res.send("NOT OK");
}
