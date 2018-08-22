import React from "react";
import Profile from "../Components/Profile/Profile";
import { connect } from "react-redux";

class User2Route extends React.Component {
  render() {
    return (
      <div>
        <Profile name="user2" url={this.props.MessageReducer.urls["user2"]} />
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(User2Route);
