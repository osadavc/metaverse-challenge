import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

const Home = () => {
  const { isAuthenticated, isInitialized, logout } = useMoralis();

  if (!isAuthenticated || !isInitialized) return <Login />;

  return (
    <div className="h-screen w-full overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <div>
        <Header />
        <Messages />
      </div>
    </div>
  );
};

export default Home;
