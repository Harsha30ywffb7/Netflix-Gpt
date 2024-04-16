import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../../components/constants.js"
import { addNowPlayingMovies } from "../movieSlice"
import { useEffect } from "react"

export const useNowPlaying=()=>{
    
const dispatcher =  useDispatch() 
const nowPlayingMoviesData = async()=>{

  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
  const json = await response.json()
  dispatcher(addNowPlayingMovies(json.results))
}

useEffect(()=>{
  nowPlayingMoviesData()
},[])

}

