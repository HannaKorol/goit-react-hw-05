import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";





const MovieList = () => {
    const [movies, setMovies] = useState([]); /* State для збереження данних */
    useEffect(() => {
      /* useEffect - ініціює запит на сервер для отримання данних і записує в стейт setMovies(data)*/
      const getAllMovies = async () => {
        const data = await fetchMovies();
        setMovies(data);
      };
      getAllMovies();
    }, []);

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => ( /* відмальовуємо данні отримані з бекенду */
          <li key={movie.id}>
            <p>movie</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
