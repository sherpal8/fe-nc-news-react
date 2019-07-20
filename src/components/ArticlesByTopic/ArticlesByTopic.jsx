import React, { Component } from "react";
import "./ArticlesByTopic.css";
import * as api from "../../utils/api.js";
import ArticleCard from "../ArticleCard/ArticleCard";
import { navigate } from "@reach/router";

class ArticlesByTopic extends Component {
  state = { articles: [], sort_by: "created_at" };
  render() {
    const topicSearch = this.props.topic;
    const { articles } = this.state;
    return (
      <div>
        <h2>Articles on {topicSearch}</h2>
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
    const topicSearch = this.props.topic;
    api
      .getArticles(topicSearch)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(err => {
        navigate(`/error`, {
          state: { message: "Gentle apologies. Topic not found." }
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.topic !== prevProps.topic) {
      let newTopicSearch = this.props.topic;
      api
        .getArticles(newTopicSearch)
        .then(articles => {
          this.setState({ articles });
        })
        .catch(err => {
          navigate(`/error`, {
            state: { message: "Gentle apologies. Topic not found." }
          });
        });
    }
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

export default ArticlesByTopic;
