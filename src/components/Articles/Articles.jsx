import React, { Component } from "react";
import "./Articles.css";
import * as api from "../../utils/api.js";
import ArticleCard from "../ArticleCard/ArticleCard";

class Articles extends Component {
  state = { articles: [], sort_by: "created_at" };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2>Home - All articles available</h2>
        <form onSubmit={this.handleSubmit}>
          <p>Sort articles by:</p>
          <select onChange={this.handleChange}>
            <option value="created_at">Date created</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
          </select>
          <button type="submit">Sort articles!</button>
        </form>
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  };

  handleChange = event => {
    this.setState({ sort_by: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { sort_by } = this.state;
    const topicSearch = this.props.topic;
    api.getArticles(topicSearch, sort_by).then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
