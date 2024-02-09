import { useEffect } from "react";
import { Api_options, Get_movies, Top_rated_movies } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addtoprated } from "../utils/movieSlice";

const useTopRatedMovies=()=>{
    useEffect(()=>{fetchMovies()},[])
    const dispatch=useDispatch();

    const fetchMovies=async()=>{
        const data=await fetch(Top_rated_movies, Api_options)
        const movies=await data.json();
        dispatch(addtoprated(movies.results))
    }

}

export default useTopRatedMovies;