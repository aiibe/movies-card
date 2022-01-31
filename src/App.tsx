import { useEffect } from "react";
import Header from "./components/Header";
import Cards from "./containers/Cards";
import { movies$ } from "./data/movies";
import "./index.css";
import { useAppDispatch } from "./redux/hooks";
import { fetchMovies } from "./redux/reducer/movies";
import { Movie } from "./types/movies";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Fetch data
    async function fetchData() {
      const data = await movies$;
      // Hydrate redux store
      dispatch(fetchMovies(data as Movie[]));
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto mt-4">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
