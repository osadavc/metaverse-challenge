import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const TipsDialog = ({ isOpen, toggleOpen }) => {
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
              Tip Of The Day
            </Dialog.Title>

            <Dialog.Description className="space-y-4 mt-6 text-left text-[1.08rem]">
              <p>
                1. Click On A User's Avatar To View Their Profile and
                Information Like How Many Messages They Sent
              </p>

              <p>
                2. Click On A Message That You Sent To View The Message And Its
                Details, Edit and Delete The Message
              </p>
            </Dialog.Description>

            <button
              className="w-full border rounded-md h-[40px] transition-colors hover:bg-white hover:text-zinc-900 focus:ring-1 hover:font-medium focus:ring-white ring-opacity-20 ring-offset-slate-400 mt-3 outline-none"
              onClick={toggleOpen}
            >
              Dismiss
            </button>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default TipsDialog;
