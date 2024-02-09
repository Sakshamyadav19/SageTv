import { useEffect } from "react";
import { Api_options,Popular_movies} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addpopular } from "../utils/movieSlice";

const usePopular=()=>{
    useEffect(()=>{fetchMovies()},[])
    const dispatch=useDispatch();

    const fetchMovies=async()=>{
        const data=await fetch(Popular_movies, Api_options)
        const movies=await data.json();
        dispatch(addpopular(movies.results))
    }

}

export default usePopular;