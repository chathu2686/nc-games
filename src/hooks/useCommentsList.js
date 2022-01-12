import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments, postComment, deleteComment } from "../utils/api";

export const useCommentsList = (userName, review_id) => {
  const [commentsList, setCommentsList] = useState([]);
  const [postButtonClicked, setPostButtonClicked] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);

  useEffect(() => {
    setPostButtonClicked(false);
    getComments(review_id).then((commentsFromApi) => {
      console.log(commentsFromApi);
      setCommentsList(commentsFromApi);
      setCommentDeleted(false);
    });
  }, [review_id, userName, commentSubmitted, commentDeleted]);

  const openCommentForm = () => {
    if (userName !== "") {
      setPostButtonClicked(true);
    }
  };

  const handleBodyChange = (event) => {
    setCommentBody(event.target.value);
  };

  const handlePostComment = (event) => {
    event.preventDefault();
    if (commentBody.length >= 10) {
      postComment(review_id, userName, commentBody).then(
        (newCommentfromApi) => {
          console.log(newCommentfromApi);
          setCommentSubmitted(true);
          setPostButtonClicked(false);
          setCommentBody("");
        }
      );
    }
  };

  const handleCommentDelete = (event) => {
    event.preventDefault();
    deleteComment(event.target.value).then(() => {
      setCommentDeleted(true);
    });
  };

  return {
    commentSubmitted,
    postButtonClicked,
    commentBody,
    handleBodyChange,
    handlePostComment,
    openCommentForm,
    commentsList,
    handleCommentDelete,
  };
};
