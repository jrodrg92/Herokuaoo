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
          <div className="row">
            <div className="col-sm-4">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>{title}</h2>
            </div>
            <div className="col-sm-8">
              <br/>
              <div className="Login">
                <div className="row">
                  <p><Link to="/library">Iniciar sesion</Link></p>
                </div>
              </div>
              <br/>
              <div className="Menu">
                <div className="row">
                  <div className="col-sm-12">
                    <ul className="menu">
                      {items && items.map((item, key) => {
                          return <li key={key}><Link to={item.url}>{item.title}</Link></li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;