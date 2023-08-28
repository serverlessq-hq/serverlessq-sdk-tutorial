import { Queue } from "@serverlessq/nextjs";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("MESSAGE HERE")
  console.log("Message arrived!", req.body);
  return res.status(200).json({ status: "Image transformed ✅ - 500 KB " });
}

export default Queue({
  handler,
  options: {
    route: "/api/queue",
  },
});
