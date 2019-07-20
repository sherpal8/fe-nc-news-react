import React from "react";
import DisplayArticles from "../DisplayArticles/DisplayArticles";

const ArticlesByTopic = props => {
  return (
    <div>
      <DisplayArticles topic={props.topic} />
    </div>
  );
};

export default ArticlesByTopic;
