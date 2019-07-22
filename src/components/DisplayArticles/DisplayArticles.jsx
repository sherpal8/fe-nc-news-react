import React, { Component } from "react";
import * as api from "../../utils/api.js";
import ArticleCard from "../ArticleCard/ArticleCard";
import { navigate } from "@reach/router";
import "./DisplayArticles.css";

class DisplayArticles extends Component {
  state = { articles: [], sort_by: "created_at" };
  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div>
        <h2>
          {this.props.topic.length > 0
            ? `Articles on ${topic}`
            : `Home - All topics`}
        </h2>
        <form onSubmit={this.handleSubmit}>
          <select
            className="DisplayArticles__select"
            onChange={this.handleChange}
          >
            <option value="created_at">Date created</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
          </select>
          <button className="DisplayArticles__button" type="submit">
            Sort articles!
          </button>
        </form>
        <ul>
          {articles.map(article => {
            return (
              <li
                className="DisplayArticles__li"
                data-cy="DisplayArticles_li"
                key={article.article_id}
              >
                <ArticleCard
                  article={article}
                  key={article.article_id}
                  data-cy={article.article_id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    const topic = this.props.topic;
    api
      .getArticles(topic)
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
      let newTopic = this.props.topic;
      api
        .getArticles(newTopic)
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
    const topic = this.props.topic;
    api.getArticles(topic, sort_by).then(articles => {
      this.setState({ articles });
    });
  };
}

export default DisplayArticles;
