import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

import webpackconfig from '../../webpack.config.babel';

//config
import config from '../config';

//API
import blogApi from './api/blog';
import libraryApi from './api/library';

//Helpers
import * as hbsHelper from '../lib/handlebars';

import { isMobile } from '../lib/utils/device';

//Server port
const port = process.env.PORT || 3000;

const isDevelopment = process.env.NODE_ENV !== 'production';

const app= express();

app.use(express.static(path.join(__dirname, '../public')))

//Handlebars setup
app.engine(config.views.engine, exphbs({
    extname: config.views.extension,
    helpers: hbsHelper
  }));

//View
app.set('views', path.join(__dirname, config.views.path));
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
app.use('/api/library', libraryApi);

app.get('*', (req, res) => {
  res.render('frontend/index', {
      layout: false
    });
});

app.listen(config.serverPort, err => {
    if(!err){
        open('http://localhost:'+config.serverPort);
    }
});