import { NextApiRequest, NextApiResponse } from "next";
import cronjob from "./cron";

export default async function enqueue(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const cron = await cronjob.createOrUpdate({
      expression: "0/10 * ? * MON-FRI *",
      method: "GET",
    });

    res.json({ ...cron });
  } catch (e) {
    console.log("error", e);
    res.json({ status: "failed" });
  }
}
