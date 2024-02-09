import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useNowPlaying from "../hooks/useNowPlaying";
import useUpcoming from "../hooks/useUpcoming";
import MovieList from "./MovieList";
import usePopular from "../hooks/usePopular";

const MoviesSection = () => {
  useTopRatedMovies();
  useNowPlaying();
  usePopular();
  useUpcoming();
  return (
    <div className="mx-12 relative mt-14 text-white">
      <MovieList heading={"Now Playing"} type={"nowplaying"} />
      <MovieList heading={"Top Rated"} type={"toprated"} />
      <MovieList heading={"Popular"} type={"popular"} />
      <MovieList heading={"Upcoming"} type={"upcoming"} />
      <MovieList heading={"Trending"} type={"movieList"} />
    </div>
  );
};

export default MoviesSection;
