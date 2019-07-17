import React, { Component } from "react";
import * as api from "../../utils/api";
import "./ArticleById.css";
import { Link } from "@reach/router";
import Votes from "../Votes/Votes";

class ArticlePage extends Component {
  state = { article: [], comments: [] };
  render() {
    const {
      article: { title, body, comment_count, votes, article_id },
      comments
    } = this.state;
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <p>{body}</p>
          <Votes votes={votes} id={article_id} section="articles" />
          <p>Number of comments: {comment_count}</p>
        </div>
        <div>
          {this.props.location.state.postSuccessful && (
            <p>Comment post successful</p>
          )}
          <Link to={`/postComment/${article_id}`}>
            <button>Post comment!</button>
          </Link>
        </div>
        <div>
          Comments as below:
          <ul className="comment-ul">
            {comments.map(comment => {
              return (
                <li key={comment.comment_id} className="comment-list">
                  <p>
                    Comment by {comment.author} on{" "}
                    {comment.created_at.slice(0, 10)}
                  </p>
                  {comment.body}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { id } = this.props;
    api.getArticleById(id).then(article => {
      this.setState({ article });
    });
    api.getCommentsByArticleId(id).then(comments => {
      this.setState({ comments });
    });
  }
}

export default ArticlePage;
