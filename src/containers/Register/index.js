import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterChoice, GoBack, FaceBook } from './register.components.js';
import Internal from './Internal';
import { registerNewUser } from '../../actions/users';
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
    let local = { email: email, password: password }
    this.props.registerNewUser(local); 
    setTimeout(()=>{ //using this to wait for server response
      const {users} = this.props;
      if(users === 200){
      this.setState({registrationChoice: 'login'})
      }
      else if(users === 302){
        this.setState({err: true})
      }
      else if(users === 400){
        alert('server error');
      }
    },500)
       
  }

  











    render() {
    const {registrationChoice,err} = this.state;
    

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
              <Internal userExists={err} registerUser={this.registerUser} />
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

const mapStateToProps = (state) => {
  return {
    users: state.users
    }
}


const ConnectedRegister = connect(
  mapStateToProps,
  {registerNewUser}
)(Register)


export default ConnectedRegister;