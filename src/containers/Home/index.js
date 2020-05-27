import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {

    static propTypes = {
        isMobile: PropTypes.bool
    }

    render() {

        const { isMobile } = this.props;

        return (
          <div className="Home">
            <p>Hola amigues</p>
            <p>
                {console.log(isMobile)}
                {isMobile ? 'Mobile device' : 'Desktop device'}
            </p>
          </div>
        );
      }
}

// Metodo en ES6 conecta el estado y los metodos que acepta
export default connect(state => ({
    isMobile: state.device.isMobile
  }), null)(Home);