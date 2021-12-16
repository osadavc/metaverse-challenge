import Login from "../components/Login";
import { useMoralis } from "react-moralis";

const Home = () => {
  const { isAuthenticated, isInitialized, logout, account } = useMoralis();

  if (!isAuthenticated || !isInitialized) return <Login />;

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col text-center space-y-3">
      <h1 className="text-3xl">Welcome To The Metaverse 🚀</h1>
      <h2 className="text-xl">Your Wallet Address Is {account}</h2>
      <button
        onClick={logout}
        className="py-2 px-6 bg-yellow-500 rounded-lg text-zinc-50"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
