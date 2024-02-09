import { useSelector } from "react-redux";
import { Img_cdn } from "../utils/constants";

const MovieList = ({heading, type }) => {
  const movieList = useSelector((store) => store.movies[type]);
  if (!movieList) return;

  return (
    <div className="pb-6">
      <h1 className=" text-2xl pb-2">{heading}</h1>
      <div className=" w-auto flex overflow-x-scroll scrollbar-hide">
        {movieList.map((movie) => (
          <img
            className="w-32 mr-6 rounded-md"
            src={Img_cdn + movie.poster_path}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
