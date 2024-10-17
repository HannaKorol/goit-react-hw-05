import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
//import MoviesPage from "./pages/MoviesPage/MoviesPage";
//import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
//import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
//import MovieCast from "./components/MovieCast/MovieCast";
//import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";

const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews")
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Loading by suspense!</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            {/* movieId дозаоляє нам використовувати useParams() в компонентах для повернення динамічних параметрів, щрб використовувати для запиту на сервер */}
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
          {/* Якщо якийсь Route не знайдено, відобразить помилку 404 і запропонує повернення на головну сторінку */}
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
