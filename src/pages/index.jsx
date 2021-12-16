import Login from "../components/Login";
import { useMoralis } from "react-moralis";

const Home = () => {
  const { isAuthenticated, isInitialized, logout } = useMoralis();

  if (!isAuthenticated || !isInitialized) return <Login />;

  return (
    <div className="h-screen">
      <h1>Welcome To The App</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Home;
