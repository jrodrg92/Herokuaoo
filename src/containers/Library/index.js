// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

//Css
import './Library.css';

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
      <div class="container-fluid" className="book">
        <div className="row">
          <div className="col-lg-4">
            <p><Link to="/library">Go back</Link></p>
            <p><img src={book.image} style={{ maxWidth: '300px' }} /></p>
            <p>{book.title}</p>
            <p>Autor: {book.author}</p>
          </div>
          <div className="col-lg-6">
            <p>Resume: {book.resume}</p>
            <br/>
            <button>Pagar</button>
          </div>
        </div>         
      </div>
    );
  }

  renderBooksList(books) {
    return (
      <div className="col-6">
        <div className="Library">
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
            {show}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  books: state.library.books,
  book: state.library.book
}), actions)(Library);