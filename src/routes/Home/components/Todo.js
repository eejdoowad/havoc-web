import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'



const Todo = ({ onClick, completed, text }) => (
  <ListItem
    primaryText={text}
    secondaryText={completed ? 'completed' : 'not completed'}
    leftAvatar={<Avatar icon={<FileFolder />} />}
    onClick={onClick} />
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
