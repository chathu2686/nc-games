import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getComments, postComment, deleteComment } from "../utils/api";
import { useCommentsList } from "../hooks/useCommentsList";
import "./css/Comments.css";

const Comments = ({ userName }) => {
  const { review_id } = useParams();

  const {
    commentSubmitted,
    postButtonClicked,
    commentBody,
    handleBodyChange,
    handlePostComment,
    openCommentForm,
    commentsList,
    handleCommentDelete,
  } = useCommentsList(userName, review_id);

  return (
    <section>
      <h1>Comments</h1>
      {commentSubmitted ? <p>Comment posted successfully!</p> : null}
      {postButtonClicked ? (
        <form>
          <textarea
            cols="50"
            rows="10"
            onChange={handleBodyChange}
            value={commentBody}
            placeholder="Minimum 5 characters required"
          ></textarea>
          <br />
          <button onClick={handlePostComment}>Submit</button>
        </form>
      ) : (
        <button onClick={openCommentForm}>Post a comment</button>
      )}
      {!userName ? <span>Login required</span> : null}
      {commentsList.map((comment) => {
        return (
          <div key={comment.comment_id} className="comment-item">
            <h2>Comment: {comment.body}</h2>
            <br />
            Comment ID: {comment.comment_id}
            <br />
            Author: {comment.author}
            <br />
            Created on: {comment.created_at}
            <br />
            Votes: {comment.votes}
            <br />
            {userName === comment.author ? (
              <button
                name={comment.comment_id}
                value={comment.comment_id}
                onClick={handleCommentDelete}
              >
                Delete
              </button>
            ) : null}
          </div>
        );
      })}

      <Link to={`/reviews/${review_id}`}>Back to Review</Link>
    </section>
  );
};

export default Comments;
