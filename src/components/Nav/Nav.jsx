import React from "react";
import { Link } from "@reach/router";
import "./Nav.css";

const Nav = ({ topics }) => {
  return (
    <div>
      {/* // main navbar */}
      <nav className="nav">
        <Link to="/">Home - All articles</Link>
        {topics.map(({ slug }) => {
          return (
            <Link to="topics/${slug}" key={slug}>
              {slug}
            </Link>
          );
        })}
      </nav>
      {/* // second navbar */}
      <div>
        <nav className="nav2">
          <Link to="/topics/:topic">Articles by topic</Link>
          <Link to="/articles/:id">Article by I.D.</Link>
          <Link to="/postArticle">Post Article</Link>
          <nav />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
