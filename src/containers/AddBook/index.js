// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AddBook extends Component {
    static propType = {
        title: PropTypes.string,
        author: PropTypes.string,
        url: PropTypes.string,
    }

    constructor(props) {
        super(props); 
    
        this.state = {
            displaySingleBook: false
        };
    }

}

export default AddBook;