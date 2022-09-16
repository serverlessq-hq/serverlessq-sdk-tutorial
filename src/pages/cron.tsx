import type { NextPage } from "next";
import cron from "../pages/api/cron";

export const getServerSideProps = async () => {
  // const cronjob = await cron.getNextExecution();
  return {
    props: {
      // ...cronjob,
    },
  };
};

const Cron: NextPage = (props) => {
  cron.init();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-5">
          {JSON.stringify(props)}
        </div>
      </div>
    </>
  );
};

export default Cron;
