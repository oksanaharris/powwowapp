import React, { Component } from 'react';
import { RegisterChoice, GoBack, FaceBook, Internal } from './register.components.js';




class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      registrationChoice: "undefined",
      email: '',
      password: ''
    }

    this.registrationChoice=this.registrationChoice.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  registrationChoice(e){
    let {name} = e.target;
    this.setState({registrationChoice: name})
  }

  handleEmail(e){
    let {value} = e.target;
    this.setState({email: value})
  }

  handlePassword(e){
    let {value} = e.target;
    this.setState({password: value})
  }

  handleSubmit(e){
    e.preventDefault();
    let {email, password} = this.state;
    console.log(email);
    console.log(password);

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
              <Internal 
                handleEmail={this.handleEmail}
                handlePassword={this.handlePassword}
                handleSubmit={this.handleSubmit} />
            </div>
          </div>)
      }
  }
}


export default Register;