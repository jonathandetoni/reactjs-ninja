'use strict'

import React, { Component } from 'react'

class Title extends Component {
  render () {
    return (
      <h1>Olá {this.props.name} </h1>
    )
  }
}

Title.defaultProps = {
  name: 'Desconhecido'
}

export default Title
