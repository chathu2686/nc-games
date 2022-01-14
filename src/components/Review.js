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
    addReviewVote,
    voteCount,
    isVotingError,
    review_id,
    handleViewComments,
    isCommentsClicked,
  } = useReview(setIsLoading, setIsError);

  return (
    <section className="review">
      <h1 id="top">{singleReview.title}</h1>
      <img
        src={singleReview.review_img_url}
        alt="review"
        width="600"
        height="500"
      />
      <p>{singleReview.review_body}</p>
      <p>Created on: {singleReview.created_at}</p>
      <p>Category: {singleReview.category}</p>
      <p>Owner: {singleReview.owner}</p>
      <p>Designer: {singleReview.designer}</p>
      <button onClick={addReviewVote}>Vote({voteCount}) </button>
      {isVotingError ? <span>Sorry, there was a problem!</span> : null}
      <button onClick={handleViewComments}>
        View Comments({singleReview.comment_count})
      </button>{" "}
      {isCommentsClicked ? (
        <Comments review_id={review_id} isCommentsClicked={isCommentsClicked} />
      ) : null}
      <Link to={`/reviews`}>Back to Reviews</Link>
    </section>
  );
};

export default Review;
