import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { changeView } from '../actions'

const style = {
  position: 'absolute',
  bottom: '10px',
  right: '10px'
}

let AddTodoButton = ({ dispatch }) => (
  <FloatingActionButton secondary style={style} onTouchTap={() => {
    dispatch(changeView('VIEW_ADD_TODO'))
  }}>
    <ContentAdd />
  </FloatingActionButton>
)

AddTodoButton.propTypes = {
  dispatch: PropTypes.func.isRequired
}

AddTodoButton = connect()(AddTodoButton)

export default AddTodoButton
