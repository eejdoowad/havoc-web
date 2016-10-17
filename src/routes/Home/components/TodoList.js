import React, { PropTypes } from 'react'
import { List } from 'material-ui/List'
import Todo from './Todo'
import Task from './Task'

const TodoList = ({
  tasks, onTaskClick,
  todos, onTodoClick
}) => (
  <List>
    {tasks.map(task =>
      <Task
        key={task.t_id}
        {...task}
        onClick={() => onTaskClick(task.t_id)}
      />
    )}
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </List>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
