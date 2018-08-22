import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { changeUser } from "../../Actions/Actions";

class Header extends React.Component {
  handleClick = user => {
    this.props.dispatch(changeUser(user));
  };

  render() {
    return (
      <div className="HeaderData">
        <h1 className="HeaderMsg">Infinite Chat</h1>
        <button
          onClick={() => {
            this.handleClick("user1");
          }}
        >
          Mounika
        </button>
        <button
          onClick={() => {
            this.handleClick("user2");
          }}
        >
          Chudamani
        </button>
        <p>Current User:{this.props.MessageReducer.currentUser}</p>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(Header);
