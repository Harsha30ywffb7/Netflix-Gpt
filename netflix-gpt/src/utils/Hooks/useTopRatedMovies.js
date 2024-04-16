import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../../components/constants"
import { addtopRatedMovies } from "../movieSlice"
import { useEffect } from "react"


export const useTopRatedMovies = ()=>{

    const dispatcher = useDispatch()

    const getTopRatedMoviesData = async()=>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await response.json()
       
        dispatcher(addtopRatedMovies(json.results));
    }

    useEffect (()=>{
        getTopRatedMoviesData()
    },[])
}
