import { UPDATE_FIELD } from '../actions/addTodoMenu'

// ------------------------------------
// Reducers
// ------------------------------------
const init = {
  category: 'school',
  name: '',
  description: '',
  priority: 1,
  date: null,
  time: null
}
const addTodoMenu = (state = init, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return Object.assign({}, state, {
        [action.key]: action.value
      })
    default:
      return state
  }
}

export default addTodoMenu
