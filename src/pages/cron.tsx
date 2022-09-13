import { Spinner } from "components/spinner";
import type { NextPage } from "next";
import { useState } from "react";

// alternatively, you can create a cron job through SSR

// import cron from "../pages/api/cron";
// export const getServerSideProps = async () => {
//   const cronjob = await cron.createOrUpdate({
//     expression: "*/5 * * * *",
//     method: "GET",
//     retries: 2,
//   });
//   return {
//     props: {
//       ...cronjob,
//     },
//   };
// };

const Cron: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>();

  const doSomething = async () => {
    setResult("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/createCron");
      const data = await response.json();
      setResult(data);
    } catch (e: any) {
      setResult(JSON.stringify(e));
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-5">
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              disabled={isLoading}
              onClick={doSomething}
              className="text-xl border rounded-xl p-4 border-neutral-700 hover:shadow-lg disabled:text-7xl w-45"
            >
              Create Cron (CSR)
            </button>
          )}
          <div>
            <p className="font-bold">
              Client Side Fetch Result:{" "}
              <span className="font-normal">{JSON.stringify(result)}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cron;
