import { useState } from "react";
import { useMoralis } from "react-moralis";
import EditProfileDialog from "./EditProfileDialog";

const ChangeUserName = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const setUserName = (username) => {
    if (!username) return;
    setUserData({ username });
  };

  return (
    <div className="text-sm absolute top-5 right-5 bg-pink-700 px-3 py-2 font-bold rounded-full">
      <button
        className="hover:text-white text-gray-50 transition-colors"
        disabled={isUserUpdating}
        onClick={() => setIsEditingProfile((prevState) => !prevState)}
      >
        Edit Profile
      </button>

      <EditProfileDialog
        isOpen={isEditingProfile}
        toggleOpen={() => {
          setIsEditingProfile((prevState) => !prevState);
        }}
        setUserData={setUserData}
      />
    </div>
  );
};

export default ChangeUserName;
