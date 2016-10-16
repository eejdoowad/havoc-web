import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import initTasks from '../assets/init_tasks.json'
const tmp = JSON.stringify(initTasks, null, 2)

export const Main = () => (
  <div>
    <h4>Welcome DUCK!</h4>
    <img
      alt='This is NOT A duck, because Redux!'
      className='duck'
      src={DuckImage} />
    <pre>{tmp}</pre>
  </div>
)

export default Main
