'use strict'

import React, { Component } from 'react'

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

export default Title