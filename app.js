const express = require('express');
const app = express(); 
const server = require('http').Server(app); 
const io = require('socket.io')(server);

if(process.env.NODE_ENV === 'development') {
    // configure webpack-dev-middlware with our original webpack config
    // then... "use" webpack-dev-middleware
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpackConfig = require('./webpack.config.js')
    const webpack = require("webpack");
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        publicPath:'/javascripts'
    }));
}

app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.render('index.html');
});

server.listen(3000);