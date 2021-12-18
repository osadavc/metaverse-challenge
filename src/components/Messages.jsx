import { useState, useEffect, useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
import TipsDialog from "./TipsDialog";

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessageRef = useRef();

  const [messages, setMessages] = useState([]);
  const [isTipsOpen, setIsTipsOpen] = useState(false);

  const { data } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .select("message", "createdAt", "user")
        .ascending("createdAt")
        .greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * 60 * 24)),
    [],
    {
      live: true,
    }
  );

  useEffect(() => {
    setMessages(data);

    setTimeout(() => {
      endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, [data]);

  useEffect(() => {
    if (localStorage.getItem("hasTipsOpened") == undefined) {
      setIsTipsOpen(true);
    }
  }, []);

  return (
    <div className="pb-56 max-w-screen-2xl mx-auto">
      <div className="">
        <div className="my-5 flex justify-center">
          <ByMoralis variant="dark" />
        </div>

        <div className="space-y-10 px-5 ">
          {messages.map((message, i) => (
            <Message key={i} message={message} />
          ))}
        </div>

        <div className="flex justify-center">
          <SendMessage
            endOfMessageRef={endOfMessageRef}
            setMessages={setMessages}
          />
        </div>

        <div ref={endOfMessageRef} className="text-center text-gray-400 mt-10">
          <p>You're up to date {user.get("username")} 🎉</p>
        </div>
      </div>
      <TipsDialog
        isOpen={isTipsOpen}
        toggleOpen={() => {
          setIsTipsOpen((prev) => !prev);
          localStorage.setItem("hasTipsOpened", true);
        }}
      />
    </div>
  );
};

export default Messages;
