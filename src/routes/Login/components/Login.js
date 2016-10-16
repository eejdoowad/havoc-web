import React from 'react'
import { Card, CardActions } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

const iconStyles = {
  color: 'gray',
  fontSize: '150px'
}

const cardStyle = {
  width: '400px'
}

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

export const Login = (props) => (
  <div className={'page-center'}>
    <Card style={cardStyle} containerStyle={cardContainerStyle}>
      <FontIcon className='material-icons' style={iconStyles}>account_circle</FontIcon>

      <TextField
        hintText='Username'
        floatingLabelText='Username' />

      <TextField
        hintText='Password Field'
        floatingLabelText='Password'
        type='password' />

      <RaisedButton label='Log In' primary />

      <CardActions>
        <FlatButton label='Register' />
      </CardActions>
    </Card>
  </div>
)

Login.propTypes = {
}

export default Login
