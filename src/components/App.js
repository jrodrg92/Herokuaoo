import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Global/css/App.css';

import Header from './Global/Header';
import Footer from './Global/Footer';
import Content from './Global/Content';

import items from '../data/menu';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequires
  }

  render() {

    const { children } = this.props;

    return (
      <div className="App">
        <Header title='Aplication' items={items} />
        <Content body={children} />
        <Footer copyrigth="&copy; Copyrigth"/>
      </div>
    );
  }
}

export default App;
