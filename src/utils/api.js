import axios from "axios";

const gameDataApi = axios.create({
  baseURL: "https://thar-first-game.herokuapp.com/api",
});

export const getReviewList = (category, sortBy) => {
  return gameDataApi
    .get(`/reviews?category=${category}&sort_by=${sortBy}`)
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
  return gameDataApi.get(`/reviews/${review_id}/comments`).then((res) => {
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
