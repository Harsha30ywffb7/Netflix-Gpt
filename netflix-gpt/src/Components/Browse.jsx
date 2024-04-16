import React from 'react'
import Header from './Header.jsx'
import { useNowPlaying } from '../utils/Hooks/useNowPlaying.js'
import { useTopRatedMovies } from '../utils/Hooks/useTopRatedMovies.js'
import { usePopularMovies } from '../utils/Hooks/usePopularMovies.js'
import { useUpComingMovies } from '../utils/Hooks/useUpComingMovies.js'
import MainContainer from './MainContainer.jsx';
import SecondaryContainer from './SecondaryContainer.jsx';
import GptSearch from './GptSearch.jsx'
import { useSelector } from 'react-redux'
const Browse = () => {

  const isGptSearch = useSelector(state => state.gpt.gptSearchView);

  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {isGptSearch && <GptSearch />}
      {!isGptSearch &&
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }

    </div>
  )
}

export default Browse

{
  /*
  Maincontainer
   - video
   - Name
  secondary container
   -movie lists
   -movie card
  */
}