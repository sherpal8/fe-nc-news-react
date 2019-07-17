import React, { Component } from "react";
import "./PostComment.css";
import * as api from "../../utils/api";
import { navigate } from "@reach/router";

class PostComment extends Component {
  state = { username: "", body: "" };
  render() {
    const { username, body } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"> Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="body">Comment:</label>
          <input
            type="text"
            id="body"
            value={body}
            onChange={this.handleChange}
          />
          <button type="submit">Submit comment !</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    const article_id = this.props.article_id;
    const { username, body } = this.state;
    event.preventDefault();
    api
      .postComment(article_id, username, body)
      .then(() => {
        navigate(`/articles/${article_id}`, {
          state: { postSuccessful: true }
        });
      })
      .catch(err => {
        // todo: create in router and error.jsx
        navigate("/error");
      });
  };
}

export default PostComment;
