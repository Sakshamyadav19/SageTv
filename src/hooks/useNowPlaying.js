import { useEffect } from "react";
import { Api_options,Nowplaying_movies} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addnowplaying } from "../utils/movieSlice";

const useNowPlaying=()=>{
    useEffect(()=>{fetchMovies()},[])
    const dispatch=useDispatch();

    const fetchMovies=async()=>{
        const data=await fetch(Nowplaying_movies, Api_options)
        const movies=await data.json();
        dispatch(addnowplaying(movies.results))
    }

}

export default useNowPlaying;