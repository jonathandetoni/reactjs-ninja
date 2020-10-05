import React, { Component } from 'react'

import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='title' onClick={function (e) {
        alert('clicou')
      }}>
        <Square />
      </div>
    )
  }
}

export default App
