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
                {isMobile ? 'Mobile debice' : 'Pc device'}
            </p>
          </div>
        );
      }
}

/*js
function mapStateToProps(state){
    return {
        isMobile: state.device.isMobile
    }
}*/

// Metodo en ES6 conecta el estado y los metodos que acepta
export default connect( state => ({
    siMobile: state.device.isMobile
}), null)(Home);