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

  const doSomething = async () => {
    setIsLoading(true);
    const r = await fetch("/api/queue");
    setIsLoading(false);
    console.log(r);
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
    </div>
  );
};

export default Home;
