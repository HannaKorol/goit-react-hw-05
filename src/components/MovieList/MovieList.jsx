import React from "react";

const MovieList = () => {
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {[].map((movie) => (
          <li key={movie.id}>
            <p>movie</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
