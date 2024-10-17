import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
    const location = useLocation();
   if (!movies || movies.length === 0) {
   return <p>No movies available</p>; // Додаємо перевірку на випадок відсутності фільмів
    }

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={{
                pathname:`/movies/${movie.id}`,
                state: {location}, // Передаємо URL, звідки перейшли
              }}
            >
              <p>{movie.title}</p> {/* Показати назву фільму */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
