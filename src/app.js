import React, { Component } from 'react'

import LikeButton from './likeButton'

class App extends Component {
  render () {
    return (
      <LikeButton handleClick={function () { alert('teste') }}>
        Texto botão
      </LikeButton>
    )
  }
}

export default App
