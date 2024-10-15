import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


  const MovieCast = () => {
    const { movieId } = useParams(); // отримуємо movieId з URL
    const [actors, setActors] = useState([]); //ініціалізуєсмо як null //Початковий стан для movie має бути масивом (а не обєктом), оскільки отриму список акторів фільму.

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
      }
    };

    useEffect(() => {
      if (movieId) {
        fetchMovieActors(); //виклик функції fetchTrending тільки під час початкового рендерингу програми
      }
    }, [movieId]);

    if (!actors && setActors.length === 0) {
      return <div>Loading...</div>; // Відображати стан завантаження, якщо дані фільму ще не доступні
    }

    return (
      <div>
        <ul>
          {actors.map((actor) => (
            <li key={actor.id}>
              {actor.name} as {actor.character} {/* Ім'я актора і його роль */}
            </li>
          ))}
        </ul>
      </div>
    );
  }; 
    
    export default MovieCast;