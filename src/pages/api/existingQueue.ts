import { enqueue } from "@serverlessq/nextjs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await enqueue({
      target: "https://mock.codes/200",
      method: "GET",
      queueId: "da60c1ce-037f-4341-a3eb-e204a62a1f00",
    });
    res.json({ status: "success", ...result });
  } catch (e) {
    res.json({ status: "failed" });
  }
}
