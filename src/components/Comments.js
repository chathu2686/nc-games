import { useParams, Link } from "react-router-dom";
import { useCommentsList } from "../hooks/useCommentsList";
import "./css/Comments.css";

const Comments = ({ userName, setIsLoading, setIsError }) => {
  const { review_id } = useParams();

  const {
    postButtonClicked,
    commentBody,
    handleBodyChange,
    handlePostComment,
    openCommentForm,
    commentsList,
    handleCommentDelete,
  } = useCommentsList(userName, review_id, setIsLoading, setIsError);

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

      <Link to={`/reviews/${review_id}`}>Back to Review</Link>
    </section>
  );
};

export default Comments;
