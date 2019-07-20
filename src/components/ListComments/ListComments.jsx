import React from "react";
import "./ListComments.css";
import { Link } from "@reach/router";
import Votes from "../Votes/Votes";

const ListComments = props => {
  const { article_id, comments } = props;
  return (
    <div>
      <h3 className="ListComments__h3">Comments:</h3>
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id} className="ListComments__list">
              <div>
                <Votes
                  votes={comment.votes}
                  id={comment.comment_id}
                  section="comments"
                />
              </div>
              <div>
                <p>
                  Comment by {comment.author} on{" "}
                  {comment.created_at.slice(0, 10)}
                </p>
                <p>{comment.body}</p>
              </div>
              <Link
                to={`/deleteComment/${article_id}/${comment.author}/${
                  comment.comment_id
                }`}
              >
                <button>Delete comment</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListComments;
