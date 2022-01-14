import { useState, useEffect } from "react";
import { getReview, updateReviewVotes } from "../utils/api";
import { useParams } from "react-router-dom";

export const useReview = (setIsLoading, setIsError) => {
  const [singleReview, setSingleReview] = useState({});
  const [voteCount, setVoteCount] = useState(singleReview.votes);
  const [isVotingError, setIsVotingError] = useState(false);
  const [isCommentsClicked, setIsCommentsClicked] = useState(false);
  const [isVoteClicked, setIsVoteClicked] = useState(false);

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
    setIsVoteClicked(true);
    setIsVotingError(false);
    setVoteCount((currVotes) => currVotes + 1);

    updateReviewVotes(review_id, 1).catch(() => {
      setVoteCount((currVotes) => currVotes - 1);
      setIsVotingError(true);
      setIsVoteClicked(false);
    });
  };

  const removeReviewVote = () => {
    setIsVoteClicked(false);
    setIsVotingError(false);
    setVoteCount((currVotes) => currVotes - 1);

    updateReviewVotes(review_id, -1).catch(() => {
      setVoteCount((currVotes) => currVotes + 1);
      setIsVotingError(true);
      setIsVoteClicked(true);
    });
  };

  const handleViewComments = () => {
    setIsCommentsClicked(true);
  };

  return {
    singleReview,
    removeReviewVote,
    isVoteClicked,
    addReviewVote,
    voteCount,
    isVotingError,
    review_id,
    handleViewComments,
    isCommentsClicked,
  };
};
