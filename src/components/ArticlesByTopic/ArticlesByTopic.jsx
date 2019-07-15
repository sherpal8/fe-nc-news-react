import React, { Component } from "react";
import "./ArticlesByTopic.css";
import * as api from "../../utils/api.js";
import ArticleCard from "../ArticleCard/ArticleCard";

class ArticlesByTopic extends Component {
  state = { articles: [] };
  render() {
    const topicSearch = this.props.topic;
    const filteredArticles = this.state.articles.filter(
      article => article.topic === topicSearch
    );
    return (
      <div>
        <h2>Articles on {topicSearch}</h2>
        <ul>
          {filteredArticles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    api.getAllArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

export default ArticlesByTopic;
