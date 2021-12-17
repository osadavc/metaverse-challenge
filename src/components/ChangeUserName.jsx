import { useMoralis } from "react-moralis";

const ChangeUserName = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUserName = () => {
    const username = prompt(
      `Enter Your New User Name (current : ${user.get("username")})`
    );

    if (!username) return;
    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5 bg-pink-700 px-3 py-2 font-bold rounded-full">
      <button
        className="hover:text-white text-gray-50 transition-colors"
        disabled={isUserUpdating}
        onClick={setUserName}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ChangeUserName;
