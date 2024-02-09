import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        "movieList":null,
        "mainTrailer":null,
        "toprated":null,
        "upcoming":null,
        "popular":null,
        "nowplaying":null
    },
    reducers:{
        addmovies:(state,action)=>{
            state.movieList=action.payload;
        },
        addmaintrailer:(state,action)=>{
            state.mainTrailer=action.payload;
        },
        addtoprated:(state,action)=>{
            state.toprated=action.payload;
        },
        addupcoming:(state,action)=>{
            state.upcoming=action.payload;
        },
        addpopular:(state,action)=>{
            state.popular=action.payload;
        },
        addnowplaying:(state,action)=>{
            state.nowplaying=action.payload;
        },
    }
})

export const {addmovies,addmaintrailer,addtoprated,addnowplaying,addpopular,addupcoming} = movieSlice.actions;
export default movieSlice.reducer;