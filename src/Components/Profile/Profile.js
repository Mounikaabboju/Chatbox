import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <img className="img" src={this.props.url} />
        <h1>Name:{this.props.name}</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
}
export default Profile;
