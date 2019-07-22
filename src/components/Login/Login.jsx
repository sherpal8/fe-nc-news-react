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
        {loggedInAs && loggedInAs.length > 0 ? (
          <div className="Login__div-success-and-logout">
            <div>
              <p className="Login__p--success">
                Logged in as <i>{loggedInAs}</i>
              </p>
            </div>
            <div>
              <button
                className="Login__button--logout"
                onClick={this.logoutHandle}
              >
                Logout
              </button>
            </div>
          </div>
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
                  data-cy="Login_Username"
                  className="Login__input"
                />
              </div>
              <div>
                <label htmlFor="password"> Password: </label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                  value={password}
                  data-cy="Login_Username"
                  className="Login__input"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="Login__button"
                  data-cy="Login_submit"
                >
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
          localStorage.setItem("username", username);
        }
      })
      .catch(err => {
        this.setState({ failedLogIn: true });
      });
  };

  componentDidMount = () => {
    this.setState({ loggedInAs: localStorage.username });
  };

  logoutHandle = event => {
    this.setState({
      loggedInAs: ""
    });
    localStorage.removeItem("username");
  };
}

export default Login;
