import React, { Component } from "react";
import "./DeleteComment.css";
import * as api from "../../utils/api";
import { navigate } from "@reach/router";

class DeleteComment extends Component {
  state = { username: "", password: "" };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div>
          <p className="DeleteComment__p">
            Are you sure you want to delete this comment?
          </p>
        </div>
        <div>
          <form onSubmit={this.buttonClickedYes}>
            <div>
              <label htmlFor="username">Confirm username: </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Confirm password: </label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit" className="DeleteComment__button--yes">
                Yes
              </button>
            </div>
          </form>
          <div>
            <button
              className="DeleteComment__button--no"
              onClick={this.buttonClickedNo}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  buttonClickedYes = async event => {
    event.preventDefault();
    let { username, password } = this.state;
    const { comment_id, article_id } = this.props;

    if (username.length > 0 && password.length > 0) {
      const { user } = await api.checkUsername(username);
      // password hardcoded for now
      password = "123";
      if (user.username.length > 0) {
        if (password === "123") {
          api.deleteComment(comment_id).then(() => {
            navigate(`/articles/${article_id}`, {
              state: { msgSuccess: "Comment delete successful!" }
            });
          });
        } else {
          navigate(`/articles/${article_id}`, {
            state: { msgFail: "Gentle request. Please insert correct password" }
          });
        }
      } else {
        navigate(`/articles/${article_id}`, {
          state: {
            msgFail: "Gentle request. Please enter correct username"
          }
        });
      }
    } else {
      navigate(`/articles/${article_id}`, {
        state: {
          msgFail: "Gentle request. Please fill in all entries for delete."
        }
      });
    }
  };

  buttonClickedNo = () => {
    const { article_id } = this.props;
    navigate(`/articles/${article_id}`);
  };
}

export default DeleteComment;
