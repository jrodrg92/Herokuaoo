import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

import webpackConfig from '../../webpack.config.dev.js';

//Server port
const port = process.env.PORT || 3000;

//app
const app= express();

//Webpack Compiler
const webPackCompiler = webpack(webpackConfig);

//webpack middleware
app.use(webpackDevMiddleware(webPackCompiler));
app.use(webpackHotMiddleware(webPackCompiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
})