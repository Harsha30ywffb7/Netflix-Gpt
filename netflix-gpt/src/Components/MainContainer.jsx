import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const Movies = useSelector(state => state.movie?.playingMovies);

    if(!Movies) return null;
    const Mainmovie = Movies[0];
    

    const {original_title, overview, id} = Mainmovie;
  return (
    <div>
        
        <VideoTitle title ={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer