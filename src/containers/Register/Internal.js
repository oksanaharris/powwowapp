import React, { Component } from 'react';

const validator = require("email-validator");
const passwordValidator = require('password-validator');
let schema = new passwordValidator();
schema
.is().min(3)
.has().uppercase()
.has().not().spaces()


class Internal extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false
    }
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }


  registrationChoice(e){
    let {name} = e.target;
    this.props.registrationChoice(name);
  }

  handleEmail(e){
    let {value, style} = e.target;
    this.setState({email: value})
    style.backgroundColor = "lightgreen";
    window.addEventListener('click', () => {
      style.backgroundColor = "transparent";
    })
  }

  handlePassword(e){
    let {value, style} = e.target;
    this.setState({password: value})
    style.backgroundColor = "lightgreen";
    window.addEventListener('click', () => {
      style.backgroundColor = "transparent";
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let passwordInput = document.getElementsByClassName('register-password-input')[0];
    let emailInput = document.getElementsByClassName('register-email-input')[0];
    let {email, password, err} = this.state;
    let validEmail = validator.validate(email);
    let validPassword = schema.validate(password)
    if(!validEmail){ 
      this.setState({ emailError: true })
      emailInput.style.borderColor = 'red'
    }
    if(!validPassword){
      this.setState({ passwordError: true })
      passwordInput.style.borderColor = 'red'
    }




  }









    render() {
      const {err} = this.state;
      return(
        <div>
        <form className="internal-form" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            className="register-email-input" 
            onChange={this.handleEmail} 
            placeholder="email"/>
          <input 
            type="password"
            className="register-password-input"
            onChange={this.handlePassword} 
            placeholder="password"/>
          <input
            type="submit"
            className="register-submit-input"
            value="register"/>
        </form>
      </div>
      )
  }
}


export default Internal;