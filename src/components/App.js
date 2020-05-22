import React, { Component } from 'react';
import './Global/css/App.css';

import Header from './Global/Header';
import Footer from './Global/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          Lorem impsum....
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
