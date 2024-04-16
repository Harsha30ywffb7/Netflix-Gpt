import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../../components/constants"
import { addPopularMovies } from "../movieSlice"
import { useEffect } from "react"


export const usePopularMovies = ()=>{

    const dispatcher = useDispatch()

    const getPopularMoviesData = async()=>{
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await response.json()
        dispatcher(addPopularMovies(json.results));
    }

    useEffect (()=>{
        getPopularMoviesData()
    },[])
}
