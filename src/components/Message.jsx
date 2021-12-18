import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";
import ProfileDialog from "./ProfileDialog";

const Message = ({ message }) => {
  const { user, Moralis } = useMoralis();
  const [isOpen, setIsOpen] = useState(false);

  const isUserMessage =
    message.get("user").get("ethAddress") === user.get("ethAddress");

  useEffect(async () => {
    await message.get("user").fetch();
  });

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        className={`relative h-10 w-10 ${isUserMessage && "order-last ml-2"}`}
        onClick={() => !isUserMessage && setIsOpen(true)}
      >
        <Avatar username={message.get("user").get("username")} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-blue-400"
        }`}
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
        {message.get("user").get("username")}
      </p>

      <ProfileDialog
        isOpen={isOpen}
        toggleOpen={() => {
          setIsOpen((prev) => !prev);
        }}
        user={message.get("user")}
      />
    </div>
  );
};

export default Message;
