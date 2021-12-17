import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 bg-pink-400/10 backdrop-blur-sm shadow-sm border-b-2 border-b-pink-600 text-pink-500 md:rounded-b-md">
      <div className="grid grid-cols-5 md:grid-cols-6 md:items-end">
        <div className=" hidden md:inline-grid" />

        <div className="text-left md:text-center col-span-4">
          <div className="w-48 h-48 relative md:mx-auto border-pink-500 border-4 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the Metaverse</h1>

          <h2 className="text-4xl font-bold truncate">
            {user.get("username")}
          </h2>

          <ChangeUserName />
        </div>
      </div>
    </div>
  );
};

export default Header;
