import React, { Component } from "react";
import * as api from "../../utils/api";

class ArticlePage extends Component {
  state = { article: [], comments: [] };
  render() {
    const {
      article: { title, body, comment_count, votes },
      comments
    } = this.state;
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <p>{body}</p>
          <p>Votes: {votes}</p>
          <p>Number of comments: {comment_count}</p>
        </div>
        <div>
          Comments as below:
          <ul>
            {comments.map(comment => {
              return (
                <li>
                  <p>
                    Comment by {comment.author} on {comment.created_at}
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
