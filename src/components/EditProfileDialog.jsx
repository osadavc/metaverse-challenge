import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";

const EditProfileDialog = ({ isOpen, toggleOpen, setUserData }) => {
  const { user } = useMoralis();

  const [username, setUsername] = useState(user.get("username"));
  const [bio, setBio] = useState(user.get("bio"));

  return (
    <Dialog
      open={isOpen}
      onClose={toggleOpen}
      className="fixed z-50 inset-0 overflow-y-auto w-full h-screen flex justify-center items-center"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />

      <div className="relative bg-black/50 backdrop-blur-md rounded-lg max-w-sm text-center p-8 text-zinc-50 w-[400px]">
        <Dialog.Title className="font-medium text-2xl">
          Edit Profile
        </Dialog.Title>

        <div className="mt-5 space-y-2">
          <div className="flex flex-col items-start space-y-1">
            <label className="pl-3">Username</label>
            <input
              type="text"
              className="w-full px-3 py-3 rounded-md bg-transparent border outline-none"
              placeholder={`New Username (current: ${user.get("username")})`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start space-y-1">
            <label className="pl-3">Bio</label>
            <textarea
              placeholder="Your Bio"
              className="w-full px-3 py-3 rounded-md bg-transparent border outline-none h-48"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <button
            className="w-full border rounded-md h-[40px] transition-colors hover:bg-white hover:text-zinc-900 focus:ring-1 hover:font-medium focus:ring-white ring-opacity-20 ring-offset-slate-400"
            onClick={() => {
              if (!username) {
                setUserData({ bio });
              } else {
                setUserData({ username, bio });
              }

              toggleOpen();
              setUsername("");
              setBio("");
            }}
          >
            Update Profile
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default EditProfileDialog;
