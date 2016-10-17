import Main from './components/Main'

// Sync route definition
export default {
  component : Main
}

// ------------------------------------
// My failed attempt at getting the main route to load async
// If you try to get this working, you'll have to
// remove the static reducer
// ------------------------------------

// import { injectReducer } from '../../store/reducers'

// export default (store) => ({
//   /*  Async getComponent is only invoked when route matches   */
//   getComponent (nextState, cb) {
//     /*  Webpack - use 'require.ensure' to create a split point
//         and embed an async module loader (jsonp) when bundling   */
//     require.ensure([], (require) => {
//       /*  Webpack - use require callback to define
//           dependencies for bundling   */
//       const Main = require('./components/Main').default
//       // const reducer = require('./modules/login').default

//       /*  Add the reducer to the store on key 'counter'  */
//       // injectReducer(store, { key: 'login', reducer })

//       /*  Return getComponent   */
//       cb(null, Main)

//     /* Webpack named bundle   */
//     }, 'Main')
//   }
// })
