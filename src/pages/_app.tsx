import "../../styles/globals.css";
import type { AppProps } from "next/app";
import emailCron from "../pages/api/cron";

emailCron.init();

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default App;
