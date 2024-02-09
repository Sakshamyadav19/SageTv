import { useEffect } from "react";
import { Api_options, Get_trailer } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmaintrailer } from "../utils/movieSlice";

const useGetTrailer=(id)=>{
    const dispatch = useDispatch();

    useEffect(()=>{getTrailer()},[])

    const getTrailer=async()=>{
        const data= await fetch(Get_trailer+id+"/videos",Api_options)
        const videos=await data.json();
        const all_trailers=videos.results.filter((video)=>video.type==="Trailer")
        const trailer=all_trailers?all_trailers[0]:videos.results[0]
        dispatch(addmaintrailer(trailer))

    }

}

export default useGetTrailer;