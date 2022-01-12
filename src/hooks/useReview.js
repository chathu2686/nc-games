import { useState, useEffect } from "react";
import { getReview, updateReviewVotes } from "../utils/api";
import { useParams } from "react-router-dom";

export const useReview = () => {
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

  return { singleReview, addReviewVote, voteCount, isError };
};
