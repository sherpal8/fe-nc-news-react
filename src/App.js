import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import ArticlesByTopic from "./components/ArticlesByTopic/ArticlesByTopic";
import ArticleById from "./components/ArticleById/ArticleById";
import PostComment from "./components/PostComment/PostComment";
import Error from "./components/Error/Error";
import DeleteComment from "./components/DeleteComment/DeleteComment";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header" />
        <Nav className="nav" />
        <Router className="main">
          <Articles path="/" />
          <ArticlesByTopic path="/topics/:topic" />
          <ArticleById path="/articles/:article_id" />
          <PostComment path="/postComment/:article_id" />
          <Error
            default
            path="/error"
            message="Gentle apologies. Page does not exist."
          />
          <DeleteComment path="/deleteComment/:article_id/:author/:comment_id" />
        </Router>
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
