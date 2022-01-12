import axios from "axios";

const gameDataApi = axios.create({
  baseURL: "https://thar-first-game.herokuapp.com/api",
});

export const getReviewList = (category, sort_by, limit = 500) => {
  return gameDataApi
    .get("/reviews", {
      params: { category: category, sort_by: sort_by, limit: limit },
    })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getReview = (review_id) => {
  return gameDataApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getComments = (review_id) => {
  return gameDataApi
    .get(`/reviews/${review_id}/comments?limit=500`)
    .then((res) => {
      return res.data.comments;
    });
};

export const getUsers = () => {
  return gameDataApi.get("/users").then((res) => {
    return res.data.users;
  });
};

export const getCategories = () => {
  return gameDataApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const updateReviewVotes = (review_id) => {
  return gameDataApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data.updatedReview;
    });
};

export const postComment = (review_id, username, body) => {
  return gameDataApi
    .post(`reviews/${review_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return gameDataApi.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};
