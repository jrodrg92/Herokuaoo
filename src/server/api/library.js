// Dependencies
import express from 'express';
import MongoClient from 'mongodb';

// Data
import books from '../../data/books.json';

import Bd from '../bd';

import { LIBRARY } from '../bd';

const bd = new Bd();

// Express Router
const Router = express.Router();

Router.get('/books', (req, res, next) => {
  var Book = bd.getCollection('Library');
  Book.find({}).toArray(function(err, response) {
    if (err) throw err;
    res.json({response});
  });
});

// localhost:3000/api/library/book?id=1
Router.get('/book', (req, res, next) => {
  const {
    query: {
      id = 0
    }
  } = req;

  var Book = bd.getCollection('Library');
  Book.find({id:Number(id)}).toArray(function(err, response) {
    if (err) throw err;
    res.json({response});
  });

});

export default Router;