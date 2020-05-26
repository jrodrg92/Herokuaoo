import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

import webpackconfig from '../../webpack.config.babel';

<<<<<<< HEAD
=======
//API
import blogApi from './api/blog';

import * as hbsHelper from '../lib/handlebars';

import { isMobile } from '../lib/utils/device';

//Server port
>>>>>>> origin/development
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

<<<<<<< HEAD
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
=======
//API dispatch
app.use('/api/blog', blogApi);

//Handlerbar setup
app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: hbsHelper
}));

//View engine setup
app.set('views', path.join(__dirname, './views'));

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
})