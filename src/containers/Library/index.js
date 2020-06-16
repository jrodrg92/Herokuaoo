// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Library extends Component {
  static propTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array,
    book: PropTypes.array
  };

  constructor(props) {
    super(props); 

    this.state = {
      displaySingleBook: false
    };
  }

  /*Se ejecuta cuando el componente ya se encuentra en el DOM*/
  componentDidMount() {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = this.props;

    this.setState({
      displaySingleBook: id > 0
    });

    if (id > 0) {
      this.props.loadSingleBook({ id });
    } else {
      this.props.loadBooks();
    }
  }

  /*Metodo que se ejcuta cada vez que se aztualiza su parametro son las futuras propiedades*/
  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: {
          id = 0
        }
      }
    } = nextProps;

    if (nextProps.match.params !== this.props.match.params) {
      this.setState({
        displaySingleBook: id > 0
      });

      if (id > 0) {
        this.props.loadSingleBook({ id });
      }
    }
  }

  renderSingleBook(book) {
    return (
      <div className="row">
        <div className="col-sm-12">
          <p><Link to="/library">Go back</Link></p>
          <p><img src={book.image} style={{ maxWidth: '300px' }} /></p>
        </div>
        <div className="col-sm-12">
          <p>{book.title}</p>
          <p>Autor: {book.author}</p>
        </div>
      </div>
    );
  }

  renderBooksList(books) {
    return (
      <div>
        <h1>Library</h1>

        <ul>
          {
            books.map((book, key) => {
              return (
                <li key={key}>
                  <Link to={`/library/${book.id}`}>{book.title}</Link> - {book.author}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  render() {
    const {
      books,
      book
    } = this.props;

    if (isFirstRender(books) && isFirstRender(book)) {
      return null;
    }

    let show = this.renderBooksList(books);

    if (this.state.displaySingleBook && book.length > 0) {
      show = this.renderSingleBook(book[0]);
    }

    return (
      <div className="Library">
        <div className="row">
          <div className="col-sm-4">
            {show}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  books: state.library.books,
  book: state.library.book
}), actions)(Library);