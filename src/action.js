export const add = (event) => ({
  type: 'ADD',
  payload: event.target.getAttribute('data')
})

export const clear = () => ({
  type: 'CLEAR'
})