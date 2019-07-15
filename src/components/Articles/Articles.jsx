import React, { Component } from "react";
import "./Articles.css";
import * as api from "../../utils/api.js";
import ArticleCard from "../ArticleCard/ArticleCard";

class Articles extends Component {
  state = { articles: [] };
  render() {
    const { articles } = this.state;
    return (
      <div className="all-articles">
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.fetchAllArticles();
  }
  fetchAllArticles = () => {
    api.getAllArticles().then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
