import React from "react";
import "./Input.css";
import { connect } from "react-redux";
import { addMessage } from "../../Actions/Actions";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ""
    };
  }

  handleChange = e => {
    this.setState({
      msg: e.target.value
    });
  };
  addMessage = () => {
    this.props.dispatch(
      addMessage(this.props.MessageReducer.currentUser, this.state.msg)
    );
    this.setState({
      msg: ""
    });
  };

  render() {
    return (
      <div className="input-container">
        <input
          className="input-box"
          value={this.state.msg}
          onChange={this.handleChange}
        />
        <button className="input-button" onClick={this.addMessage}>
          send
        </button>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};
export default connect(mapStateToProps)(Input);
