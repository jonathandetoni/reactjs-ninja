'use strict'

import React, { Component } from 'react'

class Title extends Component {
  render () {
    return (
      <h1>Olá {this.props.name} {this.props.sobrenome.first} {this.props.sobrenome.last}</h1>
    )
  }
}

Title.defaultProps = {
  name: 'Desconhecido',
  sobrenome: {
    first: 'Sem sobrenome',
    last: ''
  }
}

export default Title
