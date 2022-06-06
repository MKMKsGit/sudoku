import React, { Component } from "react";
import "./App.css";
// url for api
// https://us-central1-skooldio-courses.cloudfunctions.net/react_01/random

const validate = board => {
  let isValid = true;
  for (let i = 0; i < 4; i++) {
    const horizontal = new Set();
    const vertical = new Set();
    const square = new Set();
    for (let j = 0; j < 4; j++) {
      horizontal.add(board[i][j]);
      vertical.add(board[j][i]);
      square.add(
        board[2 * (i % 2) + (j % 2)][2 * Math.floor(i / 2) + Math.floor(j / 2)]
      );
    }
    horizontal.delete(0);
    vertical.delete(0);
    square.delete(0);
    if (horizontal.size !== 4 || vertical.size !== 4 || square.size !== 4) {
      isValid = false;
    }
  }
  return isValid;
};

class Cell extends Component {
  render() {
    return (
      <div
        onClick={(e) => {
          if (this.props.isInitial) {
            return;
          }
          this.props.onChange((this.props.number + 1) % 5);
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
      [3, 4, 0, 0],
      [2, 0, 4, 0],
      [4, 0, 0, 2],
    ],
    initial: [
      [true, true, true, true],
      [true, true, false, false],
      [true, false, true, false],
      [true, false, false, true],
    ],
    statusText: 'test'
  };
  submit() {
    const isValid = validate(this.state.board);
  };
  render() {
    return (
      <div>
        <div className="board">
          {this.state.board.map((row, i) =>
            row.map((number, j) => (
              <Cell
                key={`cell-${i}-${j}`}
                isInitial={this.state.initial[i][j]}
                number={number}
                onChange={(newNumber) => {
                  const { board } = this.state;
                  board[i][j] = newNumber;
                  this.setState({
                    board,
                  });
                }}
              />
            ))
          )}
        </div>
        <button onClick={this.submit}>Submit</button>
        <p>{this.state.statusText}</p>
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
