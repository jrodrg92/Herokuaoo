import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/App.css';

class Footer extends Component {

  static propTypes = {
    copyrigth: PropTypes.string
  }

  render() {
    const {copyrigth} = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyrigth}} />
      </div>
    );
  }
}

export default Footer;