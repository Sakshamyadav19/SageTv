import { useSelector } from "react-redux";
import useGetTrailer from "../hooks/useGetTrailer";

const Trailer = ({ movieId }) => {
  useGetTrailer(movieId);
  const trailerId=useSelector(store=>store.movies.mainTrailer)

  return (
    <div className="absolute w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerId?.key+"?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&rel=0&playlist="+trailerId?.key}
      ></iframe>
    </div>
  );
};

export default Trailer;
