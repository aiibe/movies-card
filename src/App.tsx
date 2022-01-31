import { useEffect, useState } from "react";
import { movies$ } from "./data/movies";
import "./index.css";

type Movie = {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
};

function App() {
  const [movies, setMovies] = useState<Movie[] | []>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await movies$;
      setMovies(data as Movie[]);
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
            {/* Ratio Likes/Dislikes */}
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
