import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevmiddleware from 'webpack-dev-middleware';
import webpackHotmiddleware from 'webpack-hot-middleware';
import open from 'open';
import exphbs from 'express-handlebars';

//webpack config
import webpackconfig from '../../webpack.config.dev';

//API
import blogApi from './api/blog';

//Helpers
import * as hbshelper from '../lib/handlebars';

//Utils
import { isMobile } from '../lib/utils/device';

//enviroment
const port = process.env.PORT || 3000;

//express app
const app= express();

//Public
app.use(express.static(path.join(__dirname, '../public')))

//Handlebars setup
app.engine('.hbs', exphbs({
    extname: '.hbs',
    helpers: hbshelper
}));

//View
app.set('views', path.join(__dirname, './views'));
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

//Send traffic to react
app.get('*', (req, res) => {
res.render('frontend/index', {
        layout: false
    })
});

app.listen(port, err => {
    if(!err){
        open('http://localhost:'+port);
    }
});