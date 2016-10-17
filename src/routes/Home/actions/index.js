import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL = 'COMPLETE_ALL'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const CHANGE_VIEW = 'CHANGE_VIEW'

export const REQUEST_TODOLIST = 'REQUEST_TODOLIST'
export const RECEIVE_TODOLIST = 'RECEIVE_TODOLIST'
export const FAILURE_TODOLIST = 'FAILURE_TODOLIST'

const requestTodoList = (user) => {
  return {
    type: REQUEST_TODOLIST,
    user
  }
}

const receiveTodoList = (task) => {
  return {
    type: RECEIVE_TODOLIST,
    task
  }
}

const failureTodoList = (error) => {
  return {
    type: FAILURE_TODOLIST,
    error
  }
}

const fetchTodoList = (user) => {
  return (dispatch) => {
    dispatch(requestTodoList(user))
    return fetch(`http://ec2-54-158-62-69.compute-1.amazonaws.com:3000/api/task/read/${user}`)
      .then(response => {
        dispatch(receiveTodoList(response.json()))
      })
      .catch((error) => {
        dispatch(failureTodoList(error))
      })
  }
}

const shouldFetchTodoList = (state, user) => {
  return true
  // const tasks = state.todoApp.tasks
  // if (!tasks) {
  //   return true
  // } else if (posts.isFetching) {
  //   return false
  // } else {
  //   return posts.didInvalidate
  // }
}

export const fetchTodoListIfNeeded = (user) => {
  return (dispatch, getState) => {
    if (shouldFetchTodoList(getState(), user)) {
      return dispatch(fetchTodoList(user))
    } else {
      return Promise.resolve()
    }
  }
}

// ------------------------------------
// Actions
// ------------------------------------
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    view
  }
}
