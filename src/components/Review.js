import { Link } from "react-router-dom";
import { useReview } from "../hooks/useReview";

const Review = ({ setIsLoading, setIsError }) => {
  const { singleReview, addReviewVote, voteCount, isVotingError } = useReview(
    setIsLoading,
    setIsError
  );

  return (
    <section>
      <h1>{singleReview.title}</h1>
      <br />
      <img
        src={singleReview.review_img_url}
        alt="review"
        width="600"
        height="500"
      />
      <br />
      <p>Created on: {singleReview.created_at}</p>
      <p>Category: {singleReview.category}</p>
      <p>Owner: {singleReview.owner}</p>
      <p>Designer: {singleReview.designer}</p>
      <br />
      <p>{singleReview.review_body}</p>
      <br />
      <button onClick={addReviewVote}>
        Vote({voteCount}){" "}
        {isVotingError ? <p>Sorry, there was a problem!</p> : null}
      </button>
      <Link to={`/reviews/${singleReview.review_id}/comments`}>
        View Comments({singleReview.comment_count})
      </Link>
      <Link to={`/reviews`}>Back to Reviews</Link>
    </section>
  );
};

export default Review;
