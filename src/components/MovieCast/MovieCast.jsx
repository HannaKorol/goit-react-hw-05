import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams(); // отримуємо movieId з URL
  const [loading, setLoading] = useState(true); // Додано стан для завантаження
  const [actors, setActors] = useState([]); //ініціалізуємо як null //Початковий стан для movie має бути масивом (а не обєктом), оскільки отриму список акторів фільму.

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTcwYWFlNjYwODI1YTU5ZGVmNjBlMWYwM2MwOGIyZCIsIm5iZiI6MTcyODgzOTExMi4yMjc5NTcsInN1YiI6IjY3MGFjYmQ5ZjU4YTkyMDZhYTQwOTc4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.84dq98WVNAZPFKBnzzHxLrqf0UO02tBIbsj3mVjISbA",
    },
  };

  const fetchMovieActors = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        options
      );
      const movieActors = await response.json();
      //      console.log(movieActors);
      setActors(movieActors.cast);
    } catch (error) {
      console.error("Error fetching the movie actors:", error);
    }  finally {
        setLoading(false); // Завантаження завершено
      }
  };

  useEffect(() => {
    if (movieId) {
      fetchMovieActors(); //виклик функції fetchTrending тільки під час початкового рендерингу програми
    }
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (actors.length === 0) {
    return <div>No actors are listed.</div>; // Якщо акторів немає
  }

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster"; //дефолтне зображення від ментора з слаку

  return (
    <div>
      <ul className={s.container}>
        {actors.map(
          (
            actor //мепимо авторів що отримали та формулюємо список
          ) => (
            <li key={actor.cast_id}>
              <p>{actor.name}</p>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width={250}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MovieCast;
