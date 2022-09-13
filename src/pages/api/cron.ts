import { Cron } from "@serverlessq/nextjs";

export default Cron(
  "testCron",
  "api/cron",
  async (req, res) => {
    // business logic executed after cron is triggered
    return;
  },
  {
    expression: "0/10 * ? * MON-FRI *",
    method: "GET",
    urlToOverrideWhenRunningLocalhost:
      "https://485c-2001-16b8-e76e-c800-e935-e246-a4be-a9b.eu.ngrok.io/api/cron",
  }
);
