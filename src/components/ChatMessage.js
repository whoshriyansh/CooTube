import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm h-12 ">
      <img className="w-8 h-8 mt-2 ml-3" src="./images/user.png" alt="user" />
      <span className="font-bold mx-2">{name}</span>
      <span className="mx-1">{message}</span>
    </div>
  );
};

export default ChatMessage;
