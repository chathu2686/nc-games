import { useReviewList } from "../hooks/useReviewList";
import { Link } from "react-router-dom";
import "./css/Reviews.css";

const Reviews = ({ setIsLoading, setIsError }) => {
  const { selectCategory, categoryList, selectSortBy, reviewList } =
    useReviewList(setIsLoading, setIsError);

  return (
    <section>
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
      <label htmlFor="sortBySelector">Sort By</label>
      <select onChange={selectSortBy} name="sortBySelector" id="sortBySelector">
        <option value="created_at">Created at</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
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
    </section>
  );
};

export default Reviews;
