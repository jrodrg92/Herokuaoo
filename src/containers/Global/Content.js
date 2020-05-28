import React, { Component } from 'react';
import Proptypes from 'prop-types';

import './css/App.css';

class Content extends Component {

  /*constructor(){
      super();
      this.state = {
        count: 0,
        number1: 0,
        number2: 0,
        result: 0
      };

      this.handleCountClick = this.handleCountClick.bind(this);
      this.handleResultClick = this.handleResultClick.bind(this);
      this.handleInputChanged = this.handleInputChanged.bind(this);

  }

  componentDidMount(){
      this.setState({
          count : 1
      });
  }

  handleCountClick(e){
     if(e.target.id === "add"){
         this.setState({
             count: this.state.count+1
         });
     }
     else if(e.target.id === "substract" && this.state.count > 0){
         this.setState({
             count: this.state.count-1
         });
     }
     else if(e.target.id === "reset"){
         this.setState({
             count: 0
         });
     }
  }

  handleResultClick(){
    this.setState({
        result: this.state.number1+this.state.number2
    });
  }

  handleInputChanged(e){
      if(e.target.id === "number1"){
          this.setState({
              number1: Number(e.target.value)
          })
      }
      else if(e.target.id === "number2"){
        this.setState({
            number2: Number(e.target.value)
        })
      }
  }*/

  static propTypes= {
    body: Proptypes.object.isRequired
  };

  render() {
    const {body} = this.props;

    return (
        <div className="Content">
          {body}
        </div>
    );
  }
}

export default Content;