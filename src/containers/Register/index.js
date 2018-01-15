import React, { Component } from 'react';
import { RegisterChoice } from './register.components.js';



class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      registrationChoice: "undefined"
    }

    this.registrationChoice=this.registrationChoice.bind(this);
  }


  registrationChoice(e){
    let {name} = e.target;
    this.setState({registrationChoice: name})

  }

    render() {
    const {registrationChoice} = this.state;
      switch (registrationChoice) {
        case "undefined":
        return(
          <div className="register-container">
            <RegisterChoice choice={this.registrationChoice} />
          </div>)
        case 'facebook':
        return (
          <div className="register-container">
          <button onClick={(e)=>this.registrationChoice(e)} name="undefined" className="goback-registration">goback</button>
            <div className="register-container-facebook">
              facebook
            </div>
          </div>)
        case "internal":
        return (
          <div className="register-container">
          <button onClick={(e)=>this.registrationChoice(e)} name="undefined" className="goback-registration">goback</button>
            <div className="register-container-internal">
              internal
            </div>
          </div>)
      }
  }
}


export default Register;