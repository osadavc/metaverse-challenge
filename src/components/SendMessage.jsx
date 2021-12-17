import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessageRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message,
        username: user.get("username"),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        () => {},
        () => {}
      );
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };

  return (
    <form
      className="flex w-11/12 fixed bg-black opacity-80 px-6 py-4 max-w-2xl bottom-8 shadow-xl rounded-full border-4 border-blue-400"
      onSubmit={submitForm}
    >
      <input
        type="text"
        className=" flex-grow outline-none bg-transparent text-white placeholder:text-gray-500"
        placeholder={`Enter A Message ${user.get("username")} ...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="font-bold text-pink-500">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
