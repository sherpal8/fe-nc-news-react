import React, { Component } from "react";
import * as api from "../../utils/api";
import "./ArticleById.css";
import { Link, navigate } from "@reach/router";
import Votes from "../Votes/Votes";

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
        <div>
          <h3 className="ArticleById__h3--comments">Comments:</h3>
          <ul>
            {comments.map(comment => {
              return (
                <li key={comment.comment_id} className="ArticleById__list">
                  <div>
                    <Votes
                      votes={comment.votes}
                      id={comment.comment_id}
                      section="comments"
                    />
                  </div>
                  <div>
                    <p>
                      Comment by {comment.author} on{" "}
                      {comment.created_at.slice(0, 10)}
                    </p>
                    <p>{comment.body}</p>
                  </div>
                  <Link
                    to={`/deleteComment/${article_id}/${comment.author}/${
                      comment.comment_id
                    }`}
                  >
                    <button>Delete comment</button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api.getArticleById(article_id).then(article => {
      this.setState({ article });
    });
    api.getCommentsByArticleId(article_id).then(comments => {
      this.setState({ comments });
    });
  }
}

export default ArticlePage;
