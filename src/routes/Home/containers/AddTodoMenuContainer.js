import { connect } from 'react-redux'
import { changeView, fetchTodoListIfNeeded } from '../actions'
import { updateField, fetchAddTodoIfNeeded } from '../actions/addTodoMenu'
import AddTodoMenu from '../components/AddTodoMenu'

const mapStateToProps = (state) => {
  const menu = state.todoApp.addTodoMenu
  return {
    category: menu.category,
    name: menu.name,
    description: menu.description,
    priority: menu.priority,
    date: menu.date,
    time: menu.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cancelAddTodo: () => {
      dispatch(changeView('VIEW_TODO_LIST'))
    },
    updateField: (key, value) => {
      console.log('update')
      dispatch(updateField(key, value))
    },
    addNewTodo: (todo) => {
      dispatch(fetchAddTodoIfNeeded(todo))
        .then(() => {
          dispatch(fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7'))
          .then(() => {
            dispatch(changeView('VIEW_TODO_LIST'))
          })
        })
    },
    fetchTodoListIfNeeded: (user) => {
      dispatch(fetchTodoListIfNeeded(user))
        .then(() => undefined)
    }
  }
}

const AddTodoMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoMenu)

export default AddTodoMenuContainer
