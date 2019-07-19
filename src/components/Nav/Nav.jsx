import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Nav.css";
import * as api from "../../utils/api.js";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    const topicsArr = this.state.topics;
    return (
      <div>
        <nav className="Nav">
          <li className="Nav__li">
            <Link to="/">Home </Link>
          </li>
          {topicsArr.map(({ slug }) => {
            return (
              <li key={slug} className="Nav__li">
                <Link className="Nav__link" to={`/topics/${slug}`} key={slug}>
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
