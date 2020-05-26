import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';

//webpack config
import webpackconfig from '../../webpack.config.dev';

//blogapi
import blogApi from './api/blog';

//enviroment
const port = process.env.PORT || 3000;

//express app
const app= express();

app.use(express.static(path.join(__dirname, '../public')))

//webpack compiler
const webpackCompiler = webpack(webpackconfig);
app.use(webpackDevmiddleware(webpackCompiler));
app.use(webpackHotmiddleware(webpackCompiler));

//API dispatch
app.use('/api/blog', blogApi);

//Send traffic to react
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
});