import React, { Component } from "react";
import "./PostComment.css";
import * as api from "../../utils/api";
import { navigate } from "@reach/router";

class PostComment extends Component {
  state = { username: "", body: "", fullname: "", password: "" };
  render() {
    const { username, body, fullname, password } = this.state;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="PostComment__form"
          aria-label="Post-Comment-Form"
        >
          <div>
            <label htmlFor="username"> Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="fullname"> Full name: </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="body">Comment: </label>
            <textarea
              rows="10"
              cols="18"
              name="body"
              id="body"
              value={body}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit" className="PostComment__button">
              Submit comment !
            </button>
          </div>
        </form>
      </div>
    );
  }

  componentDidMount = () => {
    if (localStorage.username) {
      this.setState({ username: localStorage.username });
    }
  };

  componentDidUpdate = () => {};

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = async event => {
    const article_id = this.props.article_id;
    const { username, body, fullname, password } = this.state;

    event.preventDefault();

    // check all fields entered
    if (body && fullname && password && username) {
      // check username against database
      api
        .checkUsername(username)
        .then(({ user }) => {
          // Ideally, password should match database.
          // But database currently deficient.
          // For now, frontend logic hardcoded to only accept password === 123
          // compare full name with registered name in database
          if (user.name === fullname && +password === 123) {
            api.postComment(article_id, username, body).then(() => {
              navigate(`/articles/${article_id}`, {
                state: { msgSuccess: "Post comment successful." }
              });
            });
          } else {
            navigate(`/error`, {
              state: {
                message:
                  "Gentle request. Registered fullname or password required."
              }
            });
          }
        })
        .catch(err => {
          // if username not in database
          navigate(`/error`, {
            state: { message: "Gentle request. Valid username required. " }
          });
        });
    } else {
      navigate(`/error`, {
        state: { message: "Gentle request. No empty fields please. " }
      });
    }
  };
}

export default PostComment;
