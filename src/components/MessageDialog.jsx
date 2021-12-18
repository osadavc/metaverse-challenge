import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useMoralisQuery } from "react-moralis";

const MessageDialog = ({ isOpen, toggleOpen, message }) => {
  const [editingMessage, setEditingMessage] = useState(message.get("message"));

  useEffect(() => {
    setEditingMessage(message.get("message"));
  }, [message]);

  const { data } = useMoralisQuery(
    "Messages",
    (query) => query.equalTo("message", message.get("message")),
    []
  );

  const updateMessage = async () => {
    data[0].set("message", editingMessage);
    await data[0].save();
    toggleOpen();
  };

  const deleteMessage = async () => {
    await data[0].destroy();
    toggleOpen();
  };

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
              Viewing Info About{" "}
              <span className="text-zinc-400 text-lg">
                {message.get("message")}
              </span>
            </Dialog.Title>

            <div className="mt-5 space-y-2 w-full">
              <div className="flex flex-col items-start space-y-1">
                <label className="pl-3">Edit Message</label>
                <input
                  type="text"
                  className="w-full px-3 py-3 rounded-md bg-transparent border outline-none"
                  value={editingMessage}
                  onChange={(e) => setEditingMessage(e.target.value)}
                />
              </div>
              <button
                className="w-full border rounded-md h-[40px] transition-colors hover:bg-white hover:text-zinc-900 focus:ring-1 hover:font-medium focus:ring-white ring-opacity-20 ring-offset-slate-400"
                onClick={updateMessage}
              >
                Update Message
              </button>
              <button
                className="w-full bg-red-600 rounded-md h-[40px] transition-colors hover:bg-red-700 focus:ring-1 hover:font-medium focus:ring-red-500 ring-opacity-20 ring-offset-red-500"
                onClick={deleteMessage}
              >
                Delete Message
              </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default MessageDialog;
