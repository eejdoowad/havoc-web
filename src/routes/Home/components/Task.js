import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'



const Task = ({ onClick, name, category }) => (
  <ListItem
    primaryText={name}
    secondaryText={category}
    leftAvatar={<Avatar icon={<FileFolder />} />}
    onClick={onClick} />
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default Task
