import RatioLikes from "../components/RatioLikes";
import { Movie } from "../types/movies";

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

export default Cards;
