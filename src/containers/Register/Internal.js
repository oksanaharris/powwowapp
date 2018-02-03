import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/users';
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from '../../components/LoaderButton';
import './Register.css';


class Internal extends Component {
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
    this.props.registerUser(e,this.state.email,this.state.password);
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
              text="Register"
              loadingText="Registering new user…"
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


const ConnectedInternal = connect(
  mapStateToProps,
  {loginUser}
)(Internal)


export default ConnectedInternal;