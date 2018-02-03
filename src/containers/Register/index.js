import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterChoice, GoBack, FaceBook } from './register.components.js';
import Internal from './Internal';
import Login from '../Login';
import { registerNewUser } from '../../actions/users';




class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
      registrationChoice: "undefined",
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

  registerUser = async (e, email,password) => {
    e.preventDefault();

    this.setState({ isLoading: true })

    try {
      let local = { email: email, password: password }
      await this.props.registerNewUser(local);
        const {users} = this.props;
        console.log(users);
        if(users === 200){
          this.props.history.push("/login");
        }
        else if(users === 302){
          console.log('redirect to register, no user found')
          this.setState({err: true })
        }
      
    } catch(e) {
      alert(e);
      this.setState({ isLoading: false })
    }
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
          {err ? <div>User Not Found</div> : null }
            <Login />
          </div>
          )
        case "loggedin":
        return (
          <div className="register-container">
            User Logged In - have to setup redirect to home page
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