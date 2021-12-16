import Head from "next/head";
import Login from "../components/Login";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  );
};

export default Home;
