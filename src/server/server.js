import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

import webpackconfig from '../../webpack.config.dev';

const port = process.env.PORT || 3000;

const app= express();

app.use(express.static(path.join(__dirname, '../public')))

const webpackCompiler = webpack(webpackconfig);
app.use(webpackDevmiddleware(webpackCompiler));
app.use(webpackHotmiddleware(webpackCompiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
});