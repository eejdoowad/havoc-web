import { connect } from 'react-redux'
import { toggleTodo, fetchTodoListIfNeeded } from '../actions'
import TodoList from '../components/TodoList'
import { fetchDeleteTodoIfNeeded } from '../actions/addTodoMenu'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter),
    tasks: state.todoApp.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onTaskClick: () => {

    },
    deleteTodo: (id) => {
      dispatch(fetchDeleteTodoIfNeeded(id))
        .then(() => {
          dispatch(fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7'))
          .then(() => {})
        })
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
