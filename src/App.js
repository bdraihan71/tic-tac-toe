import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      player: "X"
    };
  }

  checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];
      if (
        this.state.squares[a] &&
        this.state.squares[a] === this.state.squares[b] &&
        this.state.squares[a] === this.state.squares[c]
      ) {
        if (alert("winner " + this.state.player)) {
        } else window.location.reload();
        // console.log(this.state.player+"you win");
      }
    }
  }
  handleClick(index) {
    const squares = this.state.squares;
    if (this.state.squares[index] === null) {
      squares[index] = this.state.player;
      const player = this.state.player === "X" ? "0" : "X";
      this.setState({
        squares: squares,
        player: player
      });
      this.checkWinner();
    }
  }
  refreshPage() {
    window.location.reload();
  }

  render() {
    const Box = this.state.squares.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h3 type="button" onClick={this.refreshPage}>
          <span>Reload</span>
        </h3>
        <div className="main-box">{Box}</div>
      </div>
    );
  }
}

export default App;
