import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <>
    <Header/>
<Routes>
<Route path ='/' element={<HomePage/>}/>
<Route path ='/movies' element={<MoviesPage/>}/> 
<Route path ='*' element={<NotFoundPage/>}/> {/* Якщо якийсь Route не знайдено, відобразить помилку 404 і запропонує повернення на головну сторінку */}
</Routes>
    </>
  )
}

export default App;