import { useEffect } from "react";
import { movies$ } from "./data/movies";
import "./index.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchMovies } from "./redux/reducer/movies";
import { Movie } from "./types/movies";

function App() {
  const movies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
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

const Cards = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="mt-4">
      <div className="grid gap-4 md:grid-cols-2 sm: grid-cols-1 lg:grid-cols-3">
        {movies?.map((m, i) => (
          <div key={i} className="border-2 p-4 rounded">
            <h2 className="font-semibold">{m.title}</h2>
            <p>{m.category}</p>
            <RatioLikes likes={m.likes} dislikes={m.dislikes} />
            <div className="">
              <button>remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RatioLikes = ({
  likes,
  dislikes,
}: {
  likes: number;
  dislikes: number;
}) => {
  const total = likes + dislikes;
  const percentLikes = (likes * 100) / total;
  const percentDislikes = (dislikes * 100) / total;

  return (
    <div className="flex">
      <div
        className="h-2"
        style={{ width: percentLikes + "%", backgroundColor: "green" }}
      />
      <div
        className="h-2"
        style={{ width: percentDislikes + "%", backgroundColor: "red" }}
      />
    </div>
  );
};
