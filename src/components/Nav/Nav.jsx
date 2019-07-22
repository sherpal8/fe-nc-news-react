import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Nav.css";
import * as api from "../../utils/api.js";
import Login from "../Login/Login";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    const topicsArr = this.state.topics;
    return (
      <div>
        <Login />
        <nav className="Nav__nav">
          <li className="Nav__li">
            <Link className="Nav__Link" data-cy="Home" to="/">
              Home
            </Link>
          </li>
          {topicsArr.map(({ slug }) => {
            return (
              <li key={slug} className="Nav__li">
                <Link
                  className="Nav__Link"
                  data-cy={slug}
                  to={`/topics/${slug}`}
                  key={slug}
                >
                  {slug}
                </Link>
              </li>
            );
          })}
        </nav>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchTopics();
  };

  fetchTopics = () => {
    api.getTopics().then(topicsData => {
      this.setState({ topics: topicsData });
    });
  };
}

export default Nav;
