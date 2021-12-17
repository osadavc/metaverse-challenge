import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessageRef = useRef();

  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * 60)),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56">
      <div className="my-5 flex justify-center">
        <ByMoralis variant="dark" />
      </div>

      <div className="space-y-8 px-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>

      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-10">
        <p>You're up to date {user.get("username")} 🎉</p>
      </div>
    </div>
  );
};

export default Messages;
