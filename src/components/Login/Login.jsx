import React, { Component } from "react";
import * as api from "../../utils/api.js";
import "./Login.css";

class Login extends Component {
  state = { username: "", password: "", loggedInAs: "", failedLogIn: false };
  render() {
    const { username, password, loggedInAs, failedLogIn } = this.state;
    return (
      <div>
        {failedLogIn ? (
          <p className="Login__p--fail">Please insert valid login details</p>
        ) : null}
        {loggedInAs.length > 0 ? (
          <p className="Login__p--success">
            Logged in as <i>{loggedInAs}</i>
          </p>
        ) : (
          <form onSubmit={this.handleSubmit} className="Login__form">
            <div className="Login__div">
              <div>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  id="username"
                  onChange={this.handleChange}
                  value={username}
                  className="Login__input"
                />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  value={password}
                  className="Login__input"
                />
              </div>
              <div>
                <button type="submit" className="Login__button">
                  Login !
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    const { username, password } = this.state;
    event.preventDefault();
    api
      .checkUsername(username)
      .then(() => {
        if (+password === 123) {
          this.setState({ loggedInAs: username, failedLogIn: false });
        }
      })
      .catch(err => {
        this.setState({ failedLogIn: true });
      });
  };
}

export default Login;
