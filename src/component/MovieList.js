import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import { Link } from 'react-router-dom'

const MovieList = ({ movies, setMovies, filterTitle, filterRating }) => {
  return (

    <div>
      <div style={{ margin: "2rem " }}>
        <AddMovie movies={movies} setMovies={setMovies} />
      </div>
      <div className="Movie-list">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase()
              .trim()
              .includes(filterTitle.toLowerCase().trim()) &&
            movie.rating >= filterRating
          )
          .map((movie) => {
            return (
            <div key={movie.id}>
              <Link to={`${movie.title}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            </div>)
            })}
          </div>
      </div>
    )
  }
  
  export default MovieList