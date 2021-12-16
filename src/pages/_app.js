import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </MoralisProvider>
  );
};

export default MyApp;
