import React from "react";
import Chat from "./Chat";
const Body = (props) => {
  const chats = props.chatList.map((chat, index) => {
    return (
      <Chat
        key={index}
        time={chat.time}
        message={chat.message}
        gravatar={
          "recive" === chat.type ? props.gravatar.user2 : props.gravatar.user1
        }
        isLeft={"recive" === chat.type}
      />
    );
  });
  return (
    <div className="panel-body">
      <div className="chats">{chats}</div>
    </div>
  );
};

export default Body;
