'use strict'

const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            use: ['babel-loader']
        }]
    }
}