import React, { Component } from 'react';
import logo from './logo.svg';
import doge from "./doge.jpg";
import './App.css';

class DogeMeme extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		message1: this.props.top.toUpperCase(),
  		message2: this.props.bottom.toUpperCase()
  	};
  }
  render() {
    return (
    	
      <div className="Doge">
       	<p>{this.state.message1}</p>
       	<p>{this.state.message2}</p>
      </div>
    );
  }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
export default DogeMeme;


































