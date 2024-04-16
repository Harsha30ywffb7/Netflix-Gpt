import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        playingMovies:null,
        trailerVideo :null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies : null
    },
    reducers:{
        addNowPlayingMovies :(state, action)=>{
            state.playingMovies = action.payload;
        },
        addTrailerVideo :(state, action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies :(state, action) =>{
            state.popularMovies = action.payload
        },
        addtopRatedMovies :(state, action) =>{
            state.topRatedMovies = action.payload
        },
        addupComingMovies :(state, action) =>{
            state.upComingMovies = action.payload
        }
    }
})

export const{addNowPlayingMovies, addTrailerVideo, addPopularMovies, addtopRatedMovies, addupComingMovies} = movieSlice.actions

export default movieSlice.reducer