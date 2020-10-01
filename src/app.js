import React, { Component } from 'react'

import Title from './title'

class App extends Component {
  render () {
    return (
      <div className='title'>
        <Title name='Jonathan' sobrenome={{ first: 'de', last: 'Toni' }} />
      </div>
    )
  }
}

export default App
