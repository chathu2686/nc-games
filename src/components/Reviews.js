import { useReviewList } from "../hooks/useReviewList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
import { ErrorContext } from "../contexts/ErrorContext";
import "./css/Reviews.css";

const Reviews = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const { setIsError } = useContext(ErrorContext);

  const { selectCategory, categoryList, selectSortBy, reviewList } =
    useReviewList(setIsLoading, setIsError);

  return (
    <section>
      <div className="filters-section">
        <div className="review-filters">
          <label htmlFor="categorySelector">Category</label>
          <select
            onChange={selectCategory}
            name="categorySelector"
            id="categorySelector"
          >
            <option value="">All</option>
            {categoryList.map((category) => {
              return (
                <option value={category.slug} key={category.slug}>
                  {category.slug}
                </option>
              );
            })}
          </select>
        </div>
        <div className="review-filters">
          <label htmlFor="sortBySelector">Sort By</label>
          <select
            onChange={selectSortBy}
            name="sortBySelector"
            id="sortBySelector"
          >
            <option value="created_at">Created at</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </div>
      </div>
      <div className="review-list">
        {reviewList.map((review) => {
          return (
            <div key={review.review_id} className="single-review">
              <h2>{review.title}</h2>
              <p>Created on: {review.created_at}</p>
              <p>Category: {review.category}</p>
              <p>Owner: {review.owner}</p>
              <p>Comment Count: {review.comment_count}</p>
              <p>Votes: {review.votes}</p>
              <Link to={`/reviews/${review.review_id}`}>View Full Review</Link>
              <br />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reviews;
