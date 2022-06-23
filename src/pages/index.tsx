import type { NextPage } from "next";
import { useState } from "react";

const Spinner = () => (
  <div className="flex items-center justify-center space-x-2 animate-bounce">
    <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    <div className="w-8 h-8 bg-green-400 rounded-full"></div>
    <div className="w-8 h-8 bg-black rounded-full"></div>
  </div>
);
const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();

  const doSomething = async () => {
    setIsLoading(true);
    try {
      // const response = await queue.enqueue({
      //   method: "GET",
      //   target: "https://jsonplaceholder.typicode.com/users",
      // });
      // const response = await fetch(
      //   "https://api.serverlessq.com?id=91260faf-0141-42d6-b7cc-bc5e17d4d17b&target=https://jsonplaceholder.typicode.com/users",
      //   {
      //     method: "GET",
      //     mode: "no-cors",
      //     headers: {
      //       Accept: "application/json",
      //       "x-api-key":
      //         "584e301985702975910b7678468a236d71ee6a895afca68237cb6023911a977b",
      //     },
      //   }
      // );

      const r = await fetch("/api/queue");
      setResult(await r.json());
    } catch (e: any) {
      setResult(e);
      console.log(e);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center	 h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <button
          disabled={isLoading}
          onClick={doSomething}
          className="text-xl border rounded-xl p-4 border-neutral-700 hover:shadow-lg disabled:text-7xl"
        >
          Execute Task
        </button>
      )}
      {result ? (
        <div>
          <p className="text-lg">{JSON.stringify(result)}</p>
        </div>
      ) : undefined}
    </div>
  );
};

export default Home;
