import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useMoralisQuery } from "react-moralis";
import Avatar from "./Avatar";

const ProfileDialog = ({ isOpen, toggleOpen, user }) => {
  const { data } = useMoralisQuery(
    "Messages",
    (query) => query.equalTo("user", user),
    []
  );

  return (
    <Transition appear show={isOpen}>
      <Dialog
        onClose={toggleOpen}
        className="fixed z-50 inset-0 overflow-y-auto w-full h-screen flex justify-center items-center"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="relative bg-black/50 backdrop-blur-md rounded-lg max-w-sm text-center p-8 text-zinc-50 w-[400px] flex justify-center items-center flex-col">
            <Dialog.Title className="text-xl font-medium">
              Viewing {user.get("username")}'s Profile
            </Dialog.Title>
            <div className="relative h-28 w-28 mt-3">
              <Avatar username={user.get("username")} />
            </div>

            <div className="w-full mt-6 space-y-4">
              <div className="flex flex-col text-left">
                <span className="text-sm">Username</span>
                <span className="text-xl font-medium">
                  {user.get("username")}
                </span>
              </div>

              {user.get("bio") && (
                <div className="flex flex-col text-left">
                  <span className="text-sm">Bio</span>
                  <span className="text-xl font-medium">{user.get("bio")}</span>
                </div>
              )}

              <div className="flex flex-col text-left">
                <span className="text-sm">Number Of Messages Sent</span>
                <span className="text-xl font-medium">{data.length}</span>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ProfileDialog;
