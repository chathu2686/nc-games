import { useState, useEffect } from "react";
import { getReviewList, getCategories } from "../utils/api";

export const useReviewList = () => {
  const [reviewList, setReviewList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterSortBy, setFilterSortBy] = useState("");

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategoryList(categoriesFromApi);
    });
  }, []);

  const selectCategory = (event) => {
    setFilterCategory(event.target.value);
    console.log(event.target.value);
  };

  const selectSortBy = (event) => {
    setFilterSortBy(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    getReviewList(filterCategory, filterSortBy).then((reviewsFromApi) => {
      console.log(reviewsFromApi);
      setReviewList(reviewsFromApi);
    });
  }, [filterCategory, filterSortBy]);

  return { selectCategory, categoryList, selectSortBy, reviewList };
};
