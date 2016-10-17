import { connect } from 'react-redux'
import { fetchTodoListIfNeeded } from '../actions'
import { fetchDeleteTodoIfNeeded } from '../actions/addTodoMenu'
import Task from '../components/Task'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {
      dispatch(fetchDeleteTodoIfNeeded(id))
        .then(() => {
          dispatch(fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7'))
          .then(() => {})
        })
    }
  }
}

const TaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

export default TaskContainer
