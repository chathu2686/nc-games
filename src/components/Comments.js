import { useCommentsList } from "../hooks/useCommentsList";
import "./css/Comments.css";
import { useContext } from "react";
import { UserNameContext } from "../contexts/UserNameContext";
import { LoadingContext } from "../contexts/LoadingContext";
import { ErrorContext } from "../contexts/ErrorContext";

const Comments = ({ review_id, isCommentsClicked }) => {
  const { userName } = useContext(UserNameContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { setIsError } = useContext(ErrorContext);

  const {
    postButtonClicked,
    commentBody,
    handleBodyChange,
    handlePostComment,
    openCommentForm,
    commentsList,
    handleCommentDelete,
  } = useCommentsList(
    userName,
    review_id,
    setIsLoading,
    setIsError,
    isCommentsClicked
  );

  return (
    <section>
      <h1>Comments</h1>
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
            <h2>{comment.body}</h2>
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
    </section>
  );
};

export default Comments;
