import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
   if (!movies || movies.length === 0) {
   return <p>No movies available</p>; // Додаємо перевірку на випадок відсутності фільмів
    }

  return (
    <div>
      <ul>
        {movies.map((movie /* відмальовуємо данні отримані з бекенду */) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id.toString()}`}>
              {/* to - має бути завжди строкою! */}
              {/* Переконайтеся, що URL-адреса в Link */}
              <p>{movie.title}</p> {/* Показати назву фільму */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
