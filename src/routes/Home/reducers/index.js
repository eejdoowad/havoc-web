import { combineReducers } from 'redux'
import {
  ADD_TODO, TOGGLE_TODO,
  DELETE_TODO, EDIT_TODO, COMPLETE_TODO,
  COMPLETE_ALL, CLEAR_COMPLETED,
  SET_VISIBILITY_FILTER, CHANGE_VIEW } from '../actions'
import addTodoMenu from './addTodoMenu'

// ------------------------------------
// Reducers
// ------------------------------------
const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const defaultTodos = [] //[{ id: 1, text: 'asf', completed: false }]
function todos (state = defaultTodos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const view = (state = 'VIEW_TODO_LIST', action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.view
    default:
      return state
  }
}

const todoApp = combineReducers({
  view,
  todos,
  visibilityFilter,
  addTodoMenu
})

export default todoApp
