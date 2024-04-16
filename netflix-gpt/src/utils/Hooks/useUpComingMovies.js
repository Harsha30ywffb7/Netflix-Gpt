import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../../components/constants"
import { addupComingMovies } from "../movieSlice"
import { useEffect } from "react"


export const useUpComingMovies = ()=>{

    const dispatcher = useDispatch()

    const getUpComingMoviesData = async()=>{
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const json = await response.json()
       
        dispatcher(addupComingMovies(json.results));
    }

    useEffect (()=>{
        getUpComingMoviesData()
    },[])
}
