import React, { Component } from 'react';
import { RegisterChoice, GoBack, FaceBook } from './register.components.js';
import Internal from './Internal';

const validator = require("email-validator");




class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      registrationChoice: "internal",
      email: '',
      password: '',
      err: false
    }

    this.registrationChoice=this.registrationChoice.bind(this);
    this.registerUser=this.registerUser.bind(this);
  }


  registrationChoice(e){
    let {name} = e.target;
    this.setState({registrationChoice: name})
  }

  registerUser(email,password){
    //this.props.registerNewUser(email,password);
    setTimeout(()=>{
      this.setState({registrationChoice: 'login'})
    },500)
    
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
          <GoBack choice={this.registrationChoice} />
            <div className="register-container-facebook">
              <FaceBook />
            </div>
          </div>)
        case "internal":
        return (
          <div className="register-container">
          <GoBack choice={this.registrationChoice} />
            <div className="register-container-internal">
              <Internal registerUser={this.registerUser} />
            </div>
          </div>)
        case "login":
        return (
          <div className="register-container">
          LOGIN PAGE
          </div>
          )
      }
  }
}


export default Register;