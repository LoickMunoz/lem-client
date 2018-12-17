import React, { Component } from "react";
import Header from "./common/Header";
import Main from "./common/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="top-margin">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
