import { useEffect } from "react";
import Header from "./components/Header";
import Cards from "./containers/Cards";
import "./index.css";
import { useAppDispatch } from "./redux/hooks";
import { getMovies } from "./redux/thunk/movies";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Fetch data
    dispatch(getMovies());
  }, []);

  return (
    <div className="max-w-screen-md mx-auto mt-4">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
