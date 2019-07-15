import React from "react";

const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <div>
      <div>
        {article.title} by {article.author}
      </div>
      <div>Current votes: {article.votes}</div>
    </div>
  );
};

export default ArticleCard;
