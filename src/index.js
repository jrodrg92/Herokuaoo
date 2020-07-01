import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom';
import Bluebird from 'bluebird';
import { Provider } from 'react-redux';

import AppRoutes from './routes/routes';

import './index.css';

//redux store configuration
import configureStore from './lib/configureStore';

//Reducers
import rootReducer from './reducers';

window.Promise = Bluebird;

Bluebird.config({ warnings: false })

window.addEventListener('unhandledrejection', error=> {
  error.preventDefault();

  if(process.env.NODE_ENV !== 'production'){
    console.warn('unhandled promise rejection warning', error.detail)
  }
});

const store = configureStore({
  initialState: window.initialState
}, rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
