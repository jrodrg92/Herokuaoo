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
        <div class="container-fluid">
          <div className = "row">
            <div className="col-lg-12 col-sm-12">
              <div className="Login">
                <p><Link to="/library">Log in</Link> / <Link to="/library">Register</Link></p>            
              </div>
            </div> 
          </div>
          <div class = "row">
            <div className="col-4">
              <div className="Logo">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{title}</h2>
              </div>
            </div>
            <div className="Buscador col-12">
              <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"/>
            </div>
          </div>
          <div class = "row">
            <div className="Menu">
                <ul className="menu">
                  {items && items.map((item, key) => {
                      return <li key={key}><Link to={item.url}>{item.title}</Link></li>;
                  })}
                </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Header;