import { connect } from 'react-redux'
import { changeView } from '../actions'
import { updateField } from '../actions/addTodoMenu'
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
    }
  }
}

const AddTodoMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoMenu)

export default AddTodoMenuContainer
