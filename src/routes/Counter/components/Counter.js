import React from 'react'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.count}, Clicks: {props.clicks}</h2>
    <button className='btn btn-default' onClick={() => {
      props.increment()
      props.click()
    }}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={() => {
      props.doubleAsync()
      props.click()
    }}>
      Double (Async)
    </button>
    {' '}
    <button className='btn btn-default' onClick={() => {
      props.triple()
      props.click()
    }}>
      Triple
    </button>
  </div>
)

Counter.propTypes = {
  count       : React.PropTypes.number.isRequired,
  clicks      : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired,
  click       : React.PropTypes.func.isRequired,
  triple       : React.PropTypes.func.isRequired
}

export default Counter
