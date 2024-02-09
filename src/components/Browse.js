import useGetMovies from "../hooks/useGetMovies";
import Header from "./Header";
import MoviesSection from "./MoviesSection";
import PrimaryVideo from "./PrimaryVideo";

const Browse = () => {
  useGetMovies();

  return (
    <div className=" bg-slate-900">
      <Header />
      <PrimaryVideo />
      <MoviesSection />
    </div>
  );
};

export default Browse;

