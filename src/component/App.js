import React, { Component } from "react";
import Header from "./common/Header";
import Main from "./common/Main";
import ErrorList from "./common/ErrorList"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <ErrorList />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
