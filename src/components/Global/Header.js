import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {

  static propTypes = {
      title: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
  }

  render() {

    const { title, items } = this.props;

    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{title}</h2>
          <ul className="menu">
            {items && items.map((item, key) => {
                return <li key={key}><Link to={item.url}>{item.title}</Link></li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;