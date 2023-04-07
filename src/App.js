import { useState } from 'react';
import './App.css';
import Filter from './component/Filter'
import MovieList from './component/MovieList'
import { movieData } from './Data';
import { Route, Routes } from 'react-router-dom';
import MovieTrailer from './component/MovieTrailer';

function App() {
  const [movies, setMovies] = useState(movieData)
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  console.log(movies)
  return (
    <div className="">
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <Routes>
        <Route path='/' element={<MovieList movies={movies} filterTitle={filterTitle} setMovies={setMovies} filterRating={filterRating} />} />
        <Route path="/:title" element={<MovieTrailer movies={movies} />} />
      </Routes>

    </div>
  );
}

export default App;
