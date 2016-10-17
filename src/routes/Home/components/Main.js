import React from 'react'
import './Main.scss'
import AppContainer from '../containers/AppContainer'
import { Card } from 'material-ui/Card'

export const Main = () => (
  <div id='main'>
    <Card className='main-card'>
      <AppContainer />
    </Card>
  </div>
)

export default Main
