const reducer = (state = {squares: new Array(9).fill(''), count: 0}, action) => {

  switch(action.type) {
    case 'ADD':
      let data = action.payload
      let currentSquares = state.squares
      if(currentSquares[data] === '') {
        let s_sign = (state.count%2 === 0) ? 'X' : 'O'
        currentSquares[data] = s_sign
        return {...state, squares: currentSquares, count: state.count + 1}
      }
      else
      {
        alert('it is impossible')
        return state
      }

    case 'CLEAR':
      return {squares: new Array(9).fill(''), count: 0}

    default:
      return state
  }
}

export default reducer