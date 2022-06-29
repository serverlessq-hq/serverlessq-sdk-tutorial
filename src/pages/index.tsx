import type { NextPage } from "next";
import { useState } from "react";
import queueTest from '../pages/api/queue'

export const getServerSideProps = async () => {
  const x = await queueTest.enqueue('GET')
  console.log(x)
  return {
    props: {
      ...x
    }
  }
};
const Spinner = () => (
  <div className="flex items-center justify-center space-x-2 animate-bounce">
    <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    <div className="w-8 h-8 bg-gsreen-400 rounded-full"></div>
    <div className="w-8 h-8 bg-black rounded-full"></div>
  </div>
);
const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>();

  const doSomething = async () => {
    setIsLoading(true);
    try {
      const r = await fetch("/api/enqueue");
      setResult(await r.json());
    } catch (e: any) {
      setResult(e);
      console.log(e);
    }

    setIsLoading(false);
  };

  return (
  <>
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
    {result}
    </>
  );
};

export default Home;
