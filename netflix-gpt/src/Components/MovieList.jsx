import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({ title, movies }) => {

  return (
    <div className='bg-black'>
      <p className='text-white p-2 text-xl font-bold'>{title}</p>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex'>
          {
            movies?.map((movie) => (<MovieCard key={movie?.id} posterpath={movie?.poster_path} />))
          }

        </div>
      </div>

    </div>
  )
}

export default MovieList