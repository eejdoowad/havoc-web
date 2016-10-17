import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FileFolder from 'material-ui/svg-icons/file/folder'
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'


const iconButtonElement = (
  <IconButton
    touch
    tooltip='more'
    tooltipPosition='bottom-left' >
    <MoreVertIcon color={grey400} />
  </IconButton>
)

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
)


const Task = ({ onClick, name, category }) => (
  <ListItem
    primaryText={name}
    secondaryText={category}
    leftAvatar={<Avatar icon={<FileFolder />} />}
    rightIconButton={rightIconMenu}
    onClick={onClick} />
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default Task
