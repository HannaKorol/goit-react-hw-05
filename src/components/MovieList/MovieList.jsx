import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css"

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
                pathname: `/movies/${movie.id}`,
                state: { location }, // Передаємо URL, звідки перейшли
              }}
            >
              <p className={s.paragraph}>{movie.title}</p>
              {/* Показати назву фільму */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
