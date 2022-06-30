import { Queue } from "@serverlessq/nextjs";

const doSomethingImportant = async () => {
  return await (await fetch("https://mock.codes/200")).json();
};

// pages/api/queue
export default Queue(
  "vercel2",
  "api/queue",
  async (req, res) => {
    const result = await doSomethingImportant();
    console.log("Queue Job", result);
    res.send("finished");
  },
  { retries: 1, urlToOverrideWhenRunningLocalhost: "https://mock.codes/201" }
);
