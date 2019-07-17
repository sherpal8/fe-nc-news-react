import React from "react";
import "./ArticleCard.css";
import { Link } from "@reach/router";
import Votes from "../Votes/Votes";

const ArticleCard = ({
  article: { article_id, author, title, votes, comment_count }
}) => {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>
        by <span>{author}</span>
      </p>
      <Votes votes={votes} id={article_id} section="articles" />
      <p>Comments count: {comment_count}</p>
    </div>
  );
};

export default ArticleCard;
