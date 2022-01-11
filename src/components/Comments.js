import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getComments } from "../utils/api";

const Comments = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [postClicked, setPostClicked] = useState(false);

  const { review_id } = useParams();
  console.log(review_id);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setCommentsList(commentsFromApi);
    });
  }, [review_id]);

  const openCommentForm = () => {
    setPostClicked(true);
  };

  return (
    <section>
      <h1>Comments</h1>
      <button onClick={openCommentForm}>Post a comment</button>
      <ul>
        {commentsList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              Comment ID: {comment.comment_id}
              Author: {comment.author}
              Created on: {comment.created_at}
              Votes: {comment.votes}
              Comment: {comment.body}
            </li>
          );
        })}
      </ul>

      <Link to={`/reviews/${review_id}`}>Back to Review</Link>
    </section>
  );
};

export default Comments;
