import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/users';



class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      err: false
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
    let submitButton = document.getElementsByClassName('register-submit-input')[0];
    let {email, password, emailError,passwordError} = this.state;
    let local = { email: email, password: password }
    this.props.loginUser(local); 
    setTimeout(()=>{ //using this to wait for server response
      const {users} = this.props;
      if(users === 'success'){
        console.log('redirect needs to happen')
      }
      else if(users === 302){
        this.setState({err: true })
      }
      else if(users === 400){
        alert('server error');
      }
    },500)
  }









    render() {
      const {err} = this.state;

      return(
        <div>
        {err ? <div>User Not Found</div> : null }
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
            value="login"/>
        </form>
      </div>
      )
  }
}




const mapStateToProps = (state) => {
  return {
    users: state.users
    }
}


const ConnectedLogin = connect(
  mapStateToProps,
  {loginUser}
)(Login)


export default ConnectedLogin;