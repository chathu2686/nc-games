import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getReview, updateReviewVotes } from "../utils/api";

const Review = () => {
  const [singleReview, setSingleReview] = useState({});
  const [voteCount, setVoteCount] = useState(singleReview.votes);
  const [isError, setIsError] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    getReview(review_id).then((reviewFromApi) => {
      setSingleReview(reviewFromApi);
      setVoteCount(reviewFromApi.votes);
      console.log(reviewFromApi);
    });
  }, [review_id]);

  const addReviewVote = () => {
    setIsError(false);
    setVoteCount((currVotes) => currVotes + 1);
    updateReviewVotes(review_id).catch(() => {
      setVoteCount((currVotes) => currVotes - 1);
      setIsError(true);
    });
  };

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
        Upvote({voteCount}){" "}
        {isError ? <p>Sorry, there was a problem!</p> : null}
      </button>
      <Link to={`/reviews/${singleReview.review_id}/comments`}>
        View Comments({singleReview.comment_count})
      </Link>
      <Link to={`/reviews`}>Back to Reviews</Link>
    </section>
  );
};

export default Review;
