import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";
import { useEffect } from "react";

const Home = () => {
  const { isAuthenticated, isInitialized, user, Moralis } = useMoralis();

  if (!isAuthenticated || !isInitialized) return <Login />;

  useEffect(() => {
    const userACL = new Moralis.ACL();
    userACL.setPublicReadAccess(true);

    user.setACL(userACL);
    user.save();
  }, [isAuthenticated]);

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
