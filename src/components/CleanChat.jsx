import React, { Component } from "react";
import Heading from "./Heading";
import Body from "./Body";
import Footer from "./Footer";
class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Chat",
      chatList: [
        {
          type: "sent",
          message: "Good morning,sir What can I do for you?",
          time: "11:37:03 AM",
        },
        {
          type: "recive",
          message: "Well, I am just looking around,",
          time: "11:37:08 AM",
        },
        {
          type: "sent",
          message: "If necessary, please ask me",
          time: "11:40:10 am AM",
        },
      ],
      gravatar: {
        user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(message) {
    console.log(message);
    this.setState((state) => {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            type: "sent",
            message,
            time: new Date().toLocaleTimeString(),
          },
        ],
      };
    });
  }
  render() {
    return (
      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Heading title={this.state.title} />
            <Body
              chatList={this.state.chatList}
              gravatar={this.state.gravatar}
            />
            <Footer handleSubmit={this.handleSubmit} />
          </div>
          {/* End Panel Chat  */}
        </div>
      </div>
    );
  }
}

export default CleanChat;
