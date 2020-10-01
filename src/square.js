'use strict'

import React from 'react'

const Square = ({ color }) => (
  <div style={{
    background: color,
    height: '100px',
    width: '100px'
  }}
  />

)

Square.defaultProps = {
  color: 'gray'
}

export default Square
