import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        playingMovies:null,
        trailerVideo :null
    },
    reducers:{
        addNowPlayingMovies :(state, action)=>{
            state.playingMovies = action.payload;
        },
        addTrailerVideo :(state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
})

export const{addNowPlayingMovies, addTrailerVideo} = movieSlice.actions

export default movieSlice.reducer