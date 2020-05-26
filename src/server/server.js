import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';

import webpackconfig from '../../webpack.config.babel';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//API
import blogApi from './api/blog';

import * as hbsHelper from '../lib/handlebars';

import { isMobile } from '../lib/utils/device';

=======
>>>>>>> parent of 6b67582... cambios node api
=======
>>>>>>> parent of 6b67582... cambios node api
//Server port
=======
>>>>>>> parent of 9e60c38... merge dev
=======
>>>>>>> parent of 9e60c38... merge dev
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
<<<<<<< HEAD
<<<<<<< HEAD
})

<<<<<<< HEAD
<<<<<<< HEAD
//API dispatch
app.use('/api/blog', blogApi);

//Handlerbar setup
app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: hbsHelper
}));

//View engine setup
app.set('views', path.join(__dirname, './views'));
=======
});
>>>>>>> parent of 9e60c38... merge dev
=======
=======
=======
>>>>>>> parent of 6b67582... cambios node api
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
>>>>>>> parent of 6b67582... cambios node api
});
>>>>>>> parent of 9e60c38... merge dev

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
})