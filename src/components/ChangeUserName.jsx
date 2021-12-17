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
    <div className="text-sm absolute top-5 right-5">
      <button
        className="hover:text-pink-700 transition-colors"
        disabled={isUserUpdating}
        onClick={setUserName}
      >
        Change Your Username
      </button>
    </div>
  );
};

export default ChangeUserName;
