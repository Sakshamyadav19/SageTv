import { useSelector } from "react-redux";
import Trailer from "./Trailer";

const PrimaryVideo = () => {
  const movieList = useSelector((store) => store.movies.movieList);

  if (!movieList) return;
  const { title, overview, id } = movieList[1];

  return (
    <div>
      <Trailer movieId={id} />
      <div className="pt-64 pl-24 relative z-10">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="w-1/3 text-lg text-white">{overview}</p>
          <div className="py-4">
            <button className="border px-4 py-2 rounded-md bg-white">
              ▶️ Play
            </button>
            <button className="border px-6 py-2 rounded-md ml-4 bg-white">
              Info
            </button>
          </div>
        </div>
    </div>
  );
};

export default PrimaryVideo;
