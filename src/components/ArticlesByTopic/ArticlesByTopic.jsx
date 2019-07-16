import React, { Component } from "react";
import "./ArticlesByTopic.css";
import * as api from "../../utils/api.js";
import ArticleCard from "../ArticleCard/ArticleCard";

class ArticlesByTopic extends Component {
  state = { articles: [] };
  render() {
    const topicSearch = this.props.topic;
    const articlesByTopic = this.state.articles;
    return (
      <div>
        <h2>Articles on {topicSearch}</h2>
        <ul>
          {articlesByTopic.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    const topicSearch = this.props.topic;
    api.getArticles(topicSearch).then(articles => {
      this.setState({ articles });
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topic !== prevProps.topic) {
      let newTopicSearch = this.props.topic;
      api.getArticles(newTopicSearch).then(articles => {
        this.setState({ articles });
      });
    }
  };
}

export default ArticlesByTopic;
