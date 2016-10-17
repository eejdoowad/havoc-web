import React, { PropTypes } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoListContainer from '../containers/TodoListContainer'
import AddTodoButton from './AddTodoButton'
import AddTodoMenuContainer from '../containers/AddTodoMenuContainer'

class App extends React.Component {

  componentDidMount () {
    this.props.fetchTodoListIfNeeded('57a7bd24-ddf0-5c24-9091-ba331e486dc7')
  }

  renderTodoList () {
    return (
      <div>
        <TodoListContainer />
        {/*
        <AddTodo />
        <Footer />
        */}
        <AddTodoButton />
      </div>
    )
  }

  renderAddTodo () {
    return <AddTodoMenuContainer />
  }

  render () {
    const { view } = this.props

    switch (view) {
      case 'VIEW_TODO_LIST':
        return this.renderTodoList()
      case 'VIEW_ADD_TODO':
        return this.renderAddTodo()
      default:
        return <div>{'Invalid View'}</div>
    }
  }
}

App.propTypes = {
  view: PropTypes.string.isRequired,
  fetchTodoListIfNeeded: PropTypes.func.isRequired
}

export default App
