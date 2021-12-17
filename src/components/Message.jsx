import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage =
    message.get("user").get("ethAddress") === user.get("ethAddress");

  console.log(message.get("user").get("username"));

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        className={`relative h-10 w-10 ${isUserMessage && "order-last ml-2"}`}
      >
        <Avatar />
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
    </div>
  );
};

export default Message;
