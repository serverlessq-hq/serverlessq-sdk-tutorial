import type { NextPage } from "next";
import Link from "next/link";
import { FC } from "react";

const LinkComponent: FC<{ name: string }> = ({ name }) => {
  return (
    <Link href={`/${name.toLowerCase()}`}>
      <div className="text-xl border rounded-xl p-4 border-neutral-700 hover:shadow-lg disabled:text-7xl w-48 text-center cursor-pointer">
        <a>{name}</a>
      </div>
    </Link>
  );
};
const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <h1 className="text-4xl">ServerlessQ SDK Example</h1>
        <div className="flex items-center gap-5">
          <LinkComponent name="Queue" />
          <LinkComponent name="Cron" />
        </div>
        <p>
          Go check out the docs at{" "}
          <a
            className="text-blue-700 hover:underline"
            href="https://docs.serverlessq.com/"
            target={"_blank"}
          >
            https://docs.serverlessq.com/
          </a>
        </p>
      </div>
    </>
  );
};

export default Home;
