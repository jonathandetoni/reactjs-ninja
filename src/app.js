import React, { Component } from 'react'

import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='title'>
        <Title name='Jonathan' sobrenome={{ first: 'de', last: 'Toni' }} />
        {['red', 'blue', 'yellow'].map((square) => (
          <Square color={square} key={square} />
        ))}
      </div>
    )
  }
}

export default App
