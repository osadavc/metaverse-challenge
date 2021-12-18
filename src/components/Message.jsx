import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";
import MessageDialog from "./MessageDialog";
import ProfileDialog from "./ProfileDialog";

const Message = ({ message }) => {
  const { user } = useMoralis();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [userDetails, setUserDetails] = useState();

  const isUserMessage =
    message.get("user").get("ethAddress") === user.get("ethAddress");

  useEffect(() => {
    (async () => {
      setUserDetails(await message.get("user").fetch());
    })();
  }, [message]);

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <MessageDialog
        isOpen={isMessageOpen}
        toggleOpen={() => {
          setIsMessageOpen((prev) => !prev);
        }}
        message={message}
      />
      <div
        className={`relative h-10 w-10 ${isUserMessage && "order-last ml-2"}`}
        onClick={() => !isUserMessage && setIsProfileOpen(true)}
      >
        <Avatar username={userDetails?.get("username")} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300 cursor-pointer"
            : "rounded-bl-none bg-blue-400"
        }`}
        onClick={() => {
          isUserMessage && setIsMessageOpen(true);
        }}
      >
        <p>{message.get("message")}</p>
      </div>

      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${
          isUserMessage && "order-first pr-1"
        }`}
        datetime={message.get("createdAt")}
      />

      <p
        className={`absolute -bottom-6 text-sm ${
          isUserMessage ? "text-pink-300" : "text-blue-400"
        }`}
      >
        {userDetails?.get("username")}
      </p>

      <ProfileDialog
        isOpen={isProfileOpen}
        toggleOpen={() => {
          setIsProfileOpen((prev) => !prev);
        }}
        user={userDetails}
      />
    </div>
  );
};

export default Message;
