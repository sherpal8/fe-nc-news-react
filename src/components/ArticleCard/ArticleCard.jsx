import React from "react";
import "./ArticleCard.css";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  console.log(article.article_id);
  return (
    <div className="articleCard">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>
        by <span>{article.author}</span>
      </p>
    </div>
  );
};

export default ArticleCard;
