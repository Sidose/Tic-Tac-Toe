import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onclick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onclick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {
          Array(3).fill(null).map((_,i) => {
            return (<div className="board-row" key={i}>
            {this.renderSquare(i + (i * 2))}
            {this.renderSquare(i + 1 + (i * 2))}
            {this.renderSquare(i + 2 + (i * 2))}
           </div>)
          })
        }

      </div>
    );
  }
}

function calculateWinner(squares) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      stepActive: null
    });
  }

  getNumber(i) {
    switch (i)
    {
      case 1:
      case 2:
      case 3:
        return 1;
      case 4:
      case 5:
      case 6:
        return 2;
      case 7:
      case 8:
      case 9:
        return 3;
      default:
        break;
    }
  }

  getRow(i) {
    switch (i)
    {
      case 1:
      case 4:
      case 7:
        return 1;
      case 2:
      case 5:
      case 8:
        return 2;
      case 3:
      case 6:
      case 9:
        return 3;
      default:
        break;
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      stepActive: step
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #  ${move} (column: ${this.getRow(move)} row: ${this.getNumber(move)})` :
        'Go to game start';

      let s_class = '';
      if(this.state.stepActive === move)
        s_class = 'active';

      return (
        <li key={move}>
          <button  className={s_class} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
