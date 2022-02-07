import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getCategories, postCategory } from "../utils/api";
import { LoadingContext } from "../contexts/LoadingContext";
import { ErrorContext } from "../contexts/ErrorContext";
import "./css/Categories.css";

const Categories = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { setIsError } = useContext(ErrorContext);
  const [categoriesList, setCategoriesList] = useState([]);
  const [postcategoryClicked, setPostCategoryClicked] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getCategories()
      .then((categoriesFromApi) => {
        setCategoriesList(categoriesFromApi);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const handleNewCategory = () => {
    setPostCategoryClicked(true);
  };

  return (
    <section>
      <div className="category-list">
        {categoriesList.map((category) => {
          return (
            <div className="category-block">
              <div className="category-name">{category.slug}</div>
              <div className="category-desc">{category.description}</div>
            </div>
          );
        })}
      </div>
      <button className="add-category" onClick={handleNewCategory}>
        Add a Category
      </button>
      <form></form>
      <br />
      <br />
      <Link className="go-back" to={`/reviews`}>
        Back to Reviews
      </Link>
    </section>
  );
};

export default Categories;
