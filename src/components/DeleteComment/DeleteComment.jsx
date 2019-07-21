import React, { Component } from "react";
import "./DeleteComment.css";
import * as api from "../../utils/api";
import { navigate } from "@reach/router";

class DeleteComment extends Component {
  state = { username: "", password: "", fullname: "", msgFail: "" };
  render() {
    const { username, password, fullname, msgFail } = this.state;
    return (
      <div>
        {msgFail.length > 0 ? (
          <p className="DeleteComment__p DeleteComment__p--msgFail">
            {msgFail}
          </p>
        ) : (
          <p className="DeleteComment__p">
            Are you sure you want to delete this comment?
          </p>
        )}
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
                type="password"
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
    const { username, password, fullname } = this.state;
    const { comment_id, article_id, author } = this.props;
    //to check entry fields not empty
    if (username && password && fullname) {
      // author can only delete own comment
      if (username === author) {
        // get registered name and password from backend
        // ideally, backend will fetch username, password, registered name
        const { user } = await api.checkUsername(username);
        // Ideally, password should match database.
        // But database currently deficient.
        // For now, frontend logic hardcoded to only accept password === 123
        // compare full name with registered name in database
        if (user.name === fullname && +password === 123) {
          // successful delete
          api.deleteComment(comment_id).then(() => {
            navigate(`/articles/${article_id}`, {
              state: { msgSuccess: "Comment delete successful!" }
            });
          });
        } else {
          // if incorrect password or fullname (as per database)
          this.setState({
            msgFail:
              "Gentle request. Please insert correct password or registered fullname."
          });
        }
      } else {
        // authors can only delete own comments
        this.setState({
          msgFail: "Gentle note. Authors may only delete own comments."
        });
      }
    } else {
      // if entry fields are empty
      this.setState({
        msgFail: "Gentle request. Please fill in all entries for delete."
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
