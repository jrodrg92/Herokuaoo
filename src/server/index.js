import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

import webpackconfig from '../../webpack.config.babel';

//API
import blogApi from './api/blog';

import * as hbsHelper from '../lib/handlebars';

import { isMobile } from '../lib/utils/device';

//Server port
const port = process.env.PORT || 3000;

const isDevelopment = process.env.NODE_ENV !== 'production';

const app= express();

app.use(express.static(path.join(__dirname, '../public')))

// Handlebars setup
app.engine('.hbs', exphbs({
  extname: '.hbs',
  helpers: hbsHelper
}));
  
// View Engine Setup
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', '.hbs');

const webpackCompiler = webpack(webpackconfig);
if(isDevelopment){
    app.use(webpackDevmiddleware(webpackCompiler));
    app.use(webpackHotmiddleware(webpackCompiler));
}

app.use((req, res, next) => {
    res.locals.isMobile = isMobile (req.headers['user-agent']);
    return next();
});

app.use(express.static(path.join(__dirname, 'build')));

//API dispatch
app.use('/api/blog', blogApi);

app.get('*', (req, res) => {
  res.render('frontend/index', {
      layout: false
    });
});

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
});