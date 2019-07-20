import React, { Component } from "react";
import * as api from "../../utils/api";
import "./ArticleById.css";
import { Link, navigate } from "@reach/router";
import Votes from "../Votes/Votes";
import Comments from "../ListComments/ListComments";

class ArticlePage extends Component {
  state = {
    article: {
      votes: 0,
      article_id: 0
    },
    comments: []
  };
  render() {
    const {
      article: { title, body, comment_count, votes, article_id },
      comments
    } = this.state;
    return (
      <div>
        <div className="ArticleById__div">
          <h2>{title}</h2>
          <p>{body}</p>
          <Votes votes={votes} id={article_id} section="articles" />
          <p>Number of comments: {comment_count}</p>
        </div>
        <div>
          <Link to={`/postComment/${article_id}`}>
            <button>Post your comment!</button>
          </Link>
          {this.props.location.state ? (
            <p className="ArticleById__p--successful">
              {this.props.location.state.msgSuccess}
            </p>
          ) : null}
          {this.props.location.state ? (
            <p className="ArticleById__p--failed">
              {this.props.location.state.msgFail}
            </p>
          ) : null}
        </div>
        <Comments article_id={article_id} comments={comments} />
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(article => {
        this.setState({ article });
        api.getCommentsByArticleId(article_id).then(comments => {
          this.setState({ comments });
        });
      })
      .catch(err => {
        navigate(`/error`, {
          state: { message: "Gentle note. Article not found." }
        });
      });
  }
}

export default ArticlePage;
