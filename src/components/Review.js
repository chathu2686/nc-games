import { Link } from "react-router-dom";
import { useReview } from "../hooks/useReview";
import Comments from "./Comments";
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
import { ErrorContext } from "../contexts/ErrorContext";
import "./css/Review.css";

const Review = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { setIsError } = useContext(ErrorContext);

  const {
    singleReview,
    removeReviewVote,
    addReviewVote,
    isVoteClicked,
    voteCount,
    isVotingError,
    review_id,
    handleViewComments,
    isCommentsClicked,
  } = useReview(setIsLoading, setIsError);

  return (
    <section className="review">
      <h1 className="review-title">{singleReview.title}</h1>
      <div className="review-middle">
        <img
          src={singleReview.review_img_url}
          alt="review"
          className="review-image"
        />
        <p className="review-body">{singleReview.review_body}</p>
      </div>
      <div className="review-info">
        <p>Created on: {singleReview.created_at}</p>
        <p>Category: {singleReview.category}</p>
        <p>Owner: {singleReview.owner}</p>
        <p>Designer: {singleReview.designer}</p>
      </div>
      <div className="vote-comment">
        {isVoteClicked ? (
          <button onClick={removeReviewVote}>Unvote({voteCount})</button>
        ) : (
          <button onClick={addReviewVote}>Vote({voteCount}) </button>
        )}
        {isVotingError ? <span>Sorry, there was a problem!</span> : null}
        <button onClick={handleViewComments}>
          View Comments({singleReview.comment_count})
        </button>{" "}
      </div>
      <div className="com-list">
        {isCommentsClicked ? (
          <Comments
            review_id={review_id}
            isCommentsClicked={isCommentsClicked}
          />
        ) : null}
      </div>
      <Link className="go-back" to={`/reviews`}>
        Back to Reviews
      </Link>
    </section>
  );
};

export default Review;
