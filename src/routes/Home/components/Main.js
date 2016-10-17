import React from 'react'
import './Main.scss'
import AppContainer from '../containers/AppContainer'
import { Card } from 'material-ui/Card'

import initTasks from '../assets/init_tasks.json'
const tmp = JSON.stringify(initTasks, null, 2)

export const Main = () => (
  <div id='main'>
    <Card className='main-card'>
      <AppContainer />
    </Card>
    <Card className='main-card'>
      <pre>{tmp}</pre>
    </Card>
  </div>
)

export default Main
