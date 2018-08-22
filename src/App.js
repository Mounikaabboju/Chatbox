import React from "react";
import Header from "./Components/Header/Header";
import Chatbox from "./Components/ChatBox/Chatbox";
import { Route, Switch } from "react-router-dom";
import User1Route from "./Components/User1Route";
import User2Route from "./Components/User2Route";
class App extends React.Component {
  render() {
    return (
      <div className="AppData">
        <Header />
        <Switch>
          <Route path="/user1" component={User1Route} />
          <Route path="/user2" component={User2Route} />
          <Route component={Chatbox} />
        </Switch>
      </div>
    );
  }
}
export default App;
