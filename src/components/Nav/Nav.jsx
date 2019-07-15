import React from "react";
import { Link } from "@reach/router";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      {/* // main navbar */}
      <nav className="nav">
        <Link to="/">Home - Articles</Link>
        <Link to="/topics/:topic">Articles by topic</Link>
        <Link to="/articles/:id">Article by I.D.</Link>
        <Link to="/postArticle">Post Article</Link>
      </nav>
      {/* // second navbar */}
      <div>
        <p>Current articles by topics</p>
        <nav />
      </div>
      <nav />
    </div>
  );
};

export default Nav;
