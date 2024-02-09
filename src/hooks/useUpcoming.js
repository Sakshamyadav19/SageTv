import { useEffect } from "react";
import { Api_options, Upcoming_movies } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addupcoming } from "../utils/movieSlice";

const useUpcoming=()=>{
    useEffect(()=>{fetchMovies()},[])
    const dispatch=useDispatch();

    const fetchMovies=async()=>{
        const data=await fetch(Upcoming_movies, Api_options)
        const movies=await data.json();
        dispatch(addupcoming(movies.results))
    }

}

export default useUpcoming;