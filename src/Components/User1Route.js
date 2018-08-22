import React from "react";
import Profile from "../Components/Profile/Profile";
import { connect } from "react-redux";

class User1Route extends React.Component {
  render() {
    return (
      <div>
        <Profile name="user1" url={this.props.MessageReducer.urls["user1"]} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(User1Route);
