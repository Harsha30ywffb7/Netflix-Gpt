import React from 'react'
import { IMG_CDN_URL } from './constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-36 pr-2'>
        <img src={IMG_CDN_URL + posterpath} alt="movie logo" />
    </div>
  )
}

export default MovieCard