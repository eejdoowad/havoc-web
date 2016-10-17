import { connect } from 'react-redux'
import App from '../components/App'
import { fetchTodoListIfNeeded } from '../actions'

const mapStateToProps = (state) => {
  return {
    view: state.todoApp.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodoListIfNeeded: (user) => {
      dispatch(fetchTodoListIfNeeded(user))
        .then(() => undefined)
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
