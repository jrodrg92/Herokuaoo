import React, { Component } from 'react';
import './Global/css/App.css';

import Header from './Global/Header';
import Footer from './Global/Footer';

import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title='Aplication' items={items} />
        <p className="App-intro">
          Lorem impsum....
        </p>
        <Footer copyrigth="&copy; Copyrigth"/>
      </div>
    );
  }
}

export default App;
