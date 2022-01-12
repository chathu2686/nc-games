import { useState, useEffect } from "react";
import { getReview, updateReviewVotes } from "../utils/api";
import { useParams } from "react-router-dom";

export const useReview = (setIsLoading, setIsError) => {
  const [singleReview, setSingleReview] = useState({});
  const [voteCount, setVoteCount] = useState(singleReview.votes);
  const [isVotingError, setIsVotingError] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getReview(review_id)
      .then((reviewFromApi) => {
        setSingleReview(reviewFromApi);
        setVoteCount(reviewFromApi.votes);
        console.log(reviewFromApi);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [review_id]);

  const addReviewVote = () => {
    setIsVotingError(false);
    setVoteCount((currVotes) => currVotes + 1);
    updateReviewVotes(review_id).catch(() => {
      setVoteCount((currVotes) => currVotes - 1);
      setIsVotingError(true);
    });
  };

  return { singleReview, addReviewVote, voteCount, isVotingError };
};
