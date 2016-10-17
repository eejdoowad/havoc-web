import { combineReducers } from 'redux'
import locationReducer from './location'
import todoApp from '../routes/Home/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    todoApp,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
