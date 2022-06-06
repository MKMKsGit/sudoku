import React, { Component } from "react";
import "./App.css";
// url for api
// https://us-central1-skooldio-courses.cloudfunctions.net/react_01/random

class Cell extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <div
        onClick={(e) => {
          this.setState({
            number: (this.state.number + 1) % 5
          });
        }}
        className="cell"
      >
        {this.state.number != 0 && this.state.number}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="board">
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
}

export default App;
