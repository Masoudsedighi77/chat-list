import React from "react";

const Chat = (props) => {
  return (
    <div className={`chat ${props.isLeft && "chat-left"} `}>
      <div className="chat-avatar">
        <a
          className="avatar avatar-online"
          data-toggle="tooltip"
          href="#"
          data-placement="right"
          title=""
          data-original-title="June Lane"
        >
          <img src={props.gravatar} />
          <i></i>
        </a>
      </div>
      <div className="chat-body">
        <div className="chat-content">
          <p>{props.message}</p>
          <time className="chat-time" dateTime={props.time}>
            {props.time}
          </time>
        </div>
      </div>
    </div>
  );
};

export default Chat;
