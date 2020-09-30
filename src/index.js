'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
var Title = require('./app')

ReactDOM.render(
    React.createElement(Title), 
    document.querySelector('[data-js="app"]')
)