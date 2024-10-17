import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams(); // отримуємо movieId з URL
  const [reviews, setReviews] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTcwYWFlNjYwODI1YTU5ZGVmNjBlMWYwM2MwOGIyZCIsIm5iZiI6MTcyODgzOTExMi4yMjc5NTcsInN1YiI6IjY3MGFjYmQ5ZjU4YTkyMDZhYTQwOTc4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84dq98WVNAZPFKBnzzHxLrqf0UO02tBIbsj3mVjISbA",
    },
  };

  const fetchMovieReviews = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        options
      );
      const movieReviews = await response.json();
      //console.log(movieReviews);
      setReviews(movieReviews.results);
    } catch (error) {
      console.error("Error fetching the movie reviews:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      fetchMovieReviews(); //виклик функції fetchTrending тільки під час початкового рендерингу програми
    }
  }, [movieId]);

  if (!reviews.length) {
    return <div>No reviews are provided.</div>;
  }

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default MovieReviews;
