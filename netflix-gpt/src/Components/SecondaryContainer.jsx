import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(state=> state.movie);
  if(!movies) return null;
  {
        /**
         * Movie containers
         *  - MoviesList
         *    - Moviecard
         * Trending
         * Popular
         * Horror
         * 
         */
      }
      
  return (
    movies.playingMovies &&
     ( <div>
      <MovieList title={"Now Playing"} movies={movies?.playingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MovieList title={"Up Coming"} movies={movies?.upComingMovies} />
    </div>)
  )
}

export default SecondaryContainer