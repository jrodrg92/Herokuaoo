import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';

import webpackconfig from '../../webpack.config.babel';

const port = process.env.PORT || 3000;

const isDevelopment = process.env.NODE_ENV !== 'production';

const app= express();

app.use(express.static(path.join(__dirname, '../public')))

const webpackCompiler = webpack(webpackconfig);
if(isDevelopment){
    app.use(webpackDevmiddleware(webpackCompiler));
    app.use(webpackHotmiddleware(webpackCompiler));
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
})