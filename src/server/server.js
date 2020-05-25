import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

import webpackConfig from '../../webpack.config.dev.js';

//API
import blogApi from './api/blog';

import * as hbsHelper from '../lib/handlebars';

import { isMobile } from '../lib/utils/device';

//Server port
const port = process.env.PORT || 3000;

//app
const app= express();

//Webpack Compiler
const webPackCompiler = webpack(webpackConfig);

//webpack middleware
app.use(webpackDevMiddleware(webPackCompiler));
app.use(webpackHotMiddleware(webPackCompiler));

//API dispatch
app.use('/api/blog', blogApi);

//Handlerbar setup
app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: hbsHelper
}));

//View engine setup
app.set('views', path.join(__dirname, './views'));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
})