import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/users';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from '../../components/LoaderButton';
import './Login.css';


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ isLoading: true })

    try {
      let local = { email: this.state.email, password: this.state.password }
      await this.props.loginUser(local);
        const {users} = this.props;
        if(users === 'success'){
          console.log('redirect needs to happen')
          this.props.history.push("/");
        }
        else if(users === 302){
          console.log('redirect to register, no user found')
          this.props.history.push("/register");
          this.setState({err: true })
        }
      
    } catch(e) {
      alert(e);
      this.setState({ isLoading: false })
    }
  }





    render() {
      const {err} = this.state;

      return(
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.state.isLoading}
              text="Login"
              loadingText="Logging in…"
            />
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