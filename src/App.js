import React, { Component } from "react";
import "./App.css";
import Header from "./components//Header/Header";
import Nav from "./components//Nav/Nav";
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import ArticlesByTopic from "./components/ArticlesByTopic/ArticlesByTopic";
import ArticleById from "./components/ArticleById/ArticleById";
import PostArticle from "./components/PostArticle/PostArticle";
import { Router } from "@reach/router";
import * as api from "./utils/api.js";

class App extends Component {
  state = {
    topics: [{ slug: "Football" }, { slug: "Gardening" }, { slug: "Cooking" }]
  };
  render() {
    const topics = this.state.topics;
    return (
      <div className="App">
        <Header className="header" />
        <Nav className="nav" topics={topics} />
        <Router className="main">
          <Articles path="/" />
          <ArticlesByTopic path="/topics/:topic" />
          <ArticleById path="/articles/:id" />
          <PostArticle path="/postArticle" />
        </Router>
        <Footer className="footer" />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchTopics().then(topics => {
      console.log(topics);
    });
  };

  fetchTopics = () => {
    api.getTopics().then(topicsData => {
      console.log(topicsData);
    });
  };
}

export default App;
