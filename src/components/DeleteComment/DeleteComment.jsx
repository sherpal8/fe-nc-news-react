import React, { Component } from "react";
import "./DeleteComment.css";
import * as api from "../../utils/api";
import { navigate } from "@reach/router";

class DeleteComment extends Component {
  state = { username: "", password: "", fullname: "" };
  render() {
    const { username, password, fullname } = this.state;
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
              <label htmlFor="fullname">Confirm full name: </label>
              <input
                type="text"
                id="fullname"
                value={fullname}
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

  // to update state with input values
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  // if user decides to delte button
  buttonClickedYes = async event => {
    event.preventDefault();
    let { username, password, fullname } = this.state;
    const { comment_id, article_id, author } = this.props;
    //to check entry fields not empty
    if (username.length > 0 && password.length > 0 && fullname.length > 0) {
      // author can only delete own comment
      if (username === author) {
        // get registered name and password from backend
        // ideally, backend will fetch both username, password, name
        const { user } = await api.checkUsername(username);
        console.log(user);
        // password hardcoded for now - ideally retrieved from backend
        password = "123";
        // to sake of ease, name (fullname) hardcoded for now
        const name = "Jess Jelly";
        // only if registered name and password matched with database
        if (user.name === fullname && password === "123") {
          // successful delete
          api.deleteComment(comment_id).then(() => {
            navigate(`/articles/${article_id}`, {
              state: { msgSuccess: "Comment delete successful!" }
            });
          });
        } else {
          // if incorrect password
          navigate(`/articles/${article_id}`, {
            state: {
              msgFail:
                "Gentle request. Please insert correct password or registered fullname."
            }
          });
        }
      } else {
        // authors can only delete own comments
        navigate(`/articles/${article_id}`, {
          state: {
            msgFail: "Gentle note. Authors may only delete own comments."
          }
        });
      }
    } else {
      // if entry fields are empty
      navigate(`/articles/${article_id}`, {
        state: {
          msgFail: "Gentle request. Please fill in all entries for delete."
        }
      });
    }
  };

  // if author decides not to delete comment
  buttonClickedNo = () => {
    const { article_id } = this.props;
    navigate(`/articles/${article_id}`);
  };
}

export default DeleteComment;
