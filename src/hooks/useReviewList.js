import { useState, useEffect } from "react";
import { getReviewList, getCategories } from "../utils/api";

export const useReviewList = (setIsLoading, setIsError) => {
  const [reviewList, setReviewList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterSortBy, setFilterSortBy] = useState("");

  useEffect(() => {
    setIsError(false);
    getCategories()
      .then((categoriesFromApi) => {
        setCategoryList(categoriesFromApi);
      })
      .catch(() => {
        setIsError(true);
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
    setIsLoading(true);
    setIsError(false);
    getReviewList(filterCategory, filterSortBy)
      .then((reviewsFromApi) => {
        console.log(reviewsFromApi);
        setReviewList(reviewsFromApi);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [filterCategory, filterSortBy]);

  return { selectCategory, categoryList, selectSortBy, reviewList };
};
