import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

//webpack config
import webpackconfig from '../../webpack.config.dev';

//config
import config from '../config';

//bd config conection
import bd from './bd';

//API
import blogApi from './api/blog';
import libraryApi from './api/library';

//Helpers
import * as hbsHelper from '../lib/handlebars';

//Utils
import { isMobile } from '../lib/utils/device';

//express app
const app= express();

//Public
app.use(express.static(path.join(__dirname, '../public')))

//Handlebars setup
app.engine(config.views.engine, exphbs({
    extname: config.views.extension,
    helpers: hbsHelper
  }));

//View
app.set('views', path.join(__dirname, config.views.path));
app.set('view engine', '.hbs');

//webpack compiler
const webpackCompiler = webpack(webpackconfig);
app.use(webpackDevmiddleware(webpackCompiler));
app.use(webpackHotmiddleware(webpackCompiler));

//device detector
app.use((req, res, next) => {
    res.locals.isMobile = isMobile(req.headers['user-agent']);
    return next();
})

//API dispatch
app.use('/api/blog', blogApi);
app.use('/api/library', libraryApi);

//Send traffic to react
app.get('*', (req, res) => {
res.render('frontend/index', {
        layout: false
    })
});

app.listen(config.serverPort, err => {
    if(!err){
        open('http://localhost:'+config.serverPort);
    }
});