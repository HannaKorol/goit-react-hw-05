import { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList';
import s from "./HomePage.module.css"

const HomePage = () => {
  const [movies, setMovies] = useState([]); /* State для збереження данних */

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTcwYWFlNjYwODI1YTU5ZGVmNjBlMWYwM2MwOGIyZCIsIm5iZiI6MTcyODc2MjMwMi4xMzQ3NjQsInN1YiI6IjY3MGFjYmQ5ZjU4YTkyMDZhYTQwOTc4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ogl8ey4EF5XdNcoYpaavREbQWy_H8qjfJH9JJEDbMaM",
    },
  };

  const fetchTrending = async () => {
    /* Отримання данних з сайту api.themoviedb.org ...*/
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      );
      const data = await response.json(); /*... в вигляді json */
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching the trending movies:", error);
    }
  };

  useEffect(() => {
    fetchTrending(); //виклик функції fetchTrending тільки під час початкового рендерингу програми
  }, []);

  return (
    <div>
      <h2 className={s.paragraph}>Tranding today</h2>
      <MovieList movies={movies} />
      {/* Передаємо фільми(данні) в компонент MovieList для відобраденням їх списком на сторінці */}
    </div>
  );
};

export default HomePage;