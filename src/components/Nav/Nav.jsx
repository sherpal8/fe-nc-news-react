import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Nav.css";
import * as api from "../../utils/api.js";

class Nav extends Component {
  state = {
    topics: [{ slug: "Football" }, { slug: "Gardening" }, { slug: "Cooking" }]
  };
  render() {
    const topicsArr = this.state.topics;
    return (
      <div>
        {/* // main navbar */}
        <nav className="nav">
          <Link to="/">Home - All articles</Link>
          {topicsArr.map(({ slug }) => {
            return (
              <Link className="nav-link" to={`topics/${slug}`} key={slug}>
                {slug}
              </Link>
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
