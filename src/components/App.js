import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../components/Global/css/App.css';

import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import Content from '../components/Global/Content';

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
