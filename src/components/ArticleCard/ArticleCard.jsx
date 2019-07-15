import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <div>
        {article.title} by <span>{article.author}</span>
      </div>
      <div>Current votes: {article.votes}</div>
    </div>
  );
};

export default ArticleCard;
