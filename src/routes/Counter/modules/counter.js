import { combineReducers } from 'redux'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_CLICK = 'COUNTER_CLICK'
export const COUNTER_TRIPLE = 'COUNTER_TRIPLE'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export const click = {
  type : COUNTER_CLICK
}

export const triple = {
  type : COUNTER_TRIPLE
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment(getState().counter.count))
      console.log('hi')
    }, 200)
  }
}

export const actions = {
  increment,
  click,
  doubleAsync,
  triple
}

// ------------------------------------
// Action Handlers
// ------------------------------------
// const ACTION_HANDLERS = {
//   [COUNTER_INCREMENT] : (state, action) => state + action.payload,
//   [COUNTER_CLICK]     : (state, action) => state + action.payload
// }

// ------------------------------------
// Reducer
// ------------------------------------
function countReducer (state = 0, action) {
  switch (action.type) {
    case COUNTER_INCREMENT: return state + action.payload
    case COUNTER_TRIPLE: return state * 3
    default: return state
  }
}

function clickReducer (state = 0, action) {
  switch (action.type) {
    case COUNTER_CLICK: return state + 1
    default: return state
  }
}

const counterReducer = combineReducers({
  count: countReducer,
  clicks: clickReducer
})

export default counterReducer
