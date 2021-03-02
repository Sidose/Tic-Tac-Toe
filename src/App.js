import React from 'react';
import './App.css';
import * as actions from '../src/action'
import {connect} from 'react-redux';

const App = ({onAdd, onClear, state}) => {
  const winGrid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let {squares, count} = state
  function clickHandler(event) {
    let s_sign = (count%2 === 0) ? 'X' : 'O'

    onAdd(event)
    if(isWin())
    {
      alert( s_sign + ' won!');
      setTimeout(() => {
        onClear()
      }, 3000)

    }
  }

  const isWin = () => {
    const s_search = (count%2 === 0) ? 'X' : 'O';
    let is_win = false;
    for(let i in winGrid)
    {
      let i_count = 0;
      for(let j in winGrid[i])
      {
        if(squares[winGrid[i][j]] === s_search)
          i_count += 1
        if(i_count === 3)
        {
          is_win = true;
          break;
        }
      }
    }
    return is_win;
  }

  const getGrid = () => {

    return squares.map((square, i) => {
      return (<div className="ttt-grid" key={i} onClick={clickHandler} data={i}>{squares[i]}</div>)
    })
  }

  return (
    <div className="tic-tac-toe">
      { getGrid() }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = {
  onAdd: actions.add,
  onClear: actions.clear
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
