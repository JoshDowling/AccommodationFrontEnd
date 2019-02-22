import React, { Component } from 'react';
import axios from 'axios';
import { TestURL, CheckPassword} from '../Constants'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: null
    };
  }

  checkUser = () => {

    axios.post(TestURL + CheckPassword +, {
      password: this.state.password
    })
      .then((response) => {
        let message = response.data;
        console.log(message);
        if (response.data[0] === this.state.password) {
          sessionStorage.setItem("logUser", response.data[0]);

        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit = (e) => {

    this.checkUser();

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <div className= "login-box">
          <div>
            <div className="col-md-6 mx-auto">
              <div className="card card-body">
                <h1 className="text-center mb-4">Admin</h1>
                <div className="alert alert-danger">
                  <a className="close font-weight-light" data-dismiss="alert" href="">×</a>Please enter the password to log in.
                </div>
                <fieldset onSubmit={this.handleSubmit}>
                  <div className="form-group has-success">
                    <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password*" name="password" type="password" required/>
                  </div>
                  <input className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} value="Log In" type="submit" />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login; 