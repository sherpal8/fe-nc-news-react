import React from "react";
import "./ArticleCard.css";
import { Link } from "@reach/router";
import Votes from "../Votes/Votes";

const ArticleCard = ({
  article: { article_id, author, title, votes, comment_count, created_at }
}) => {
  return (
    <div className="ArticleCard__div">
      <div className="ArticleCard__div--votes">
        <Votes votes={votes} id={article_id} section="articles" />
      </div>
      <div>
        <Link className="ArticleCard__Link" to={`/articles/${article_id}`}>
          <h3>{title}</h3>
        </Link>
        <p>
          by <span className="ArticleCard__span">{author}</span>
        </p>
        <p>Posted on {created_at.slice(0, 10)}</p>
        <p>Comments count: {comment_count}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
