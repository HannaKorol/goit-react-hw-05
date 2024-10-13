import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // отримуємо movieId з URL
  const [movie, setMovie] = useState(null); //ініціалізуєсмо як null //Початковий стан для movie має бути об'єктом (а не масивом), оскільки отриму деталі одного фільму.

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTcwYWFlNjYwODI1YTU5ZGVmNjBlMWYwM2MwOGIyZCIsIm5iZiI6MTcyODc2MjMwMi4xMzQ3NjQsInN1YiI6IjY3MGFjYmQ5ZjU4YTkyMDZhYTQwOTc4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ogl8ey4EF5XdNcoYpaavREbQWy_H8qjfJH9JJEDbMaM",
    },
  };

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=genres%2C%20videos%2C%20reviews%2C%20images%2C%20recommendations%2C%20similar%20&language=en-US`,
        options
      );
        const movieData = await response.json();
         console.log(movieData);
      setMovie(movieData);
    } catch (error) {
      console.error("Error fetching the movie details:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(); //виклик функції fetchTrending тільки під час початкового рендерингу програми
    }
  }, [movieId]);
    
      if (!movie) {
        return <div>Loading...</div>; // Відображати стан завантаження, якщо дані фільму ще не доступні
      }

    const genreList = movie.genres ? movie.genres.map((genre) => genre.name).join(",") : ""; // так як жанри фільму розміщенні в array, треба відмапувати його і повернути данри якщо вони там є
    


  return (
    <div>
      <img src={movie.image} />
      <h2>{movie.title}</h2>
      <p>User Score: {movie.vote_average}</p>
      <p>Overview:{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Genres: {genreList}</p>
      <p>Country: {movie.origin_country}</p>
      <p>Runtime: {movie.runtime}</p>
      <hr />
      <div>
        <h3>Additional information</h3>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
          </div>
          <Outlet/>
    </div>
  );
};

export default MovieDetailsPage;
