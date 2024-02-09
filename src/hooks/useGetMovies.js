import { useEffect } from "react";
import { Api_options, Get_movies } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../utils/movieSlice";

const useGetMovies=()=>{
    useEffect(()=>{fetchMovies()},[])
    const dispatch=useDispatch();

    const fetchMovies=async()=>{
        const data=await fetch(Get_movies, Api_options)
        const movies=await data.json();
        dispatch(addmovies(movies.results))
    }

}

export default useGetMovies;