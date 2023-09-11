import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/ChatSlice";
import { generateRandomname, generateRandomstring } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addmessage({
          name: generateRandomname(),
          message: generateRandomstring(20) + "🫠",
        })
      );
    }, 500);

    return () => {
      clearInterval(i); // Clear the interval when the component is unmounted
    };
  }, [dispatch]);

  return (
    <>
      <div className="w-[650px] h-[650px] border border-gray-900 bg-gray-100 rounded-2xl overflow-y-scroll flex flex-col-reverse p-4">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div>
        <form
          className="border border-gray-900 mt-4 p-2 flex items-center"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addmessage({
                name: "Shriaynsh Lohia",
                message: LiveMessage,
              })
            );
            setLiveMessage("");
          }}
        >
          <input
            className="flex-grow p-2 mr-2 rounded-lg border border-gray-400 focus:outline-none"
            type="text"
            value={LiveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
            placeholder="Type your message..."
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
