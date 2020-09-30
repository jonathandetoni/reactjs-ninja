'use strict'

const { Component } = require('react')
const React = require('react')

class Title extends Component{
    render(){
        return(
            React.createElement('h1', null, 'Olá React!')
        )
    }
}

// var Title = React.createClass({
//     render: function(){
//         return React.createElement('h1', null, 'Titulo')
//     }
// })

module.exports = Title