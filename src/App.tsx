import { useEffect } from "react";
import Cards from "./containers/Cards";
import { movies$ } from "./data/movies";
import "./index.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchMovies } from "./redux/reducer/movies";
import { Movie } from "./types/movies";

function App() {
  const movies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Fetch data
    async function fetchData() {
      const data = await movies$;
      dispatch(fetchMovies(data as Movie[]));
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto">
      <Cards movies={movies} />
    </div>
  );
}

export default App;
