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
        <form onSubmit={this.handleSubmit} className="PostComment__form">
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

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    const article_id = this.props.article_id;
    const { username, body } = this.state;
    event.preventDefault();
    if (body.length > 0 && username.length > 0) {
      api
        .postComment(article_id, username, body)
        .then(() => {
          navigate(`/articles/${article_id}`, {
            state: { msgSuccess: "Post comment successful." }
          });
        })
        .catch(err => {
          navigate("/error", {
            state: { message: "Gentle request. Valid username please." }
          });
        });
    } else {
      navigate("/error", {
        state: { message: "Gentle request. No empty fields please. " }
      });
    }
  };
}

export default PostComment;
