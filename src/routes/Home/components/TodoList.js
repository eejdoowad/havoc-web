import React, { PropTypes } from 'react'
import { List } from 'material-ui/List'
import TaskContainer from '../containers/TaskContainer'

const TodoList = ({
  tasks, onTaskClick
}) => (
  <List>
    {tasks.map(task =>
      <TaskContainer
        key={task.t_id}
        {...task}
        onClick={() => onTaskClick(task.t_id)}
      />
    )}
  </List>
)

TodoList.propTypes = {
  tasks: PropTypes.any,
  // todos: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   completed: PropTypes.bool.isRequired,
  //   text: PropTypes.string.isRequired
  // }).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired
}

export default TodoList
