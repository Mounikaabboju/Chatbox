import React from "react";
import User1 from "../ChatBox/User1";
import User2 from "../ChatBox/User2";
import Input from "../Input/Input";
import { connect } from "react-redux";

class Chatbox extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.MessageReducer.messages.map((e, i) => {
            if (e.user == "user1") {
              return <User1 user1={e.user} message1={e.msg} />;
            } else {
              return <User2 user2={e.user} message2={e.msg} />;
            }
          })}
        </div>
        <div>
          <Input />
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(Chatbox);
