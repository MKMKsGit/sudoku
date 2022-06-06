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
            number: (this.props.number + 1) % 5,
          });
        }}
        className={`cell ${this.props.isInitial ? "initial" : ""}`}
      >
        {this.props.number !== 0 && this.props.number}
      </div>
    );
  }
}

class Board extends Component {
  state = {
    board: [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ],
  };
  render() {
    return (
      <div className="board">
        {this.state.board.map((row, i) =>
          row.map((number, j) => (
            <Cell key={`cell-${i}-${j}`} number={number} />
          ))
        )}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="App">
        <Board />
      </div>
    </div>
  );
}

export default App;
