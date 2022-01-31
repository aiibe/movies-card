import Card from "../components/Card";
import { Movie } from "../types/movies";

const Cards = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="mt-4 px-4">
      <div className="grid gap-4 md:grid-cols-2 sm: grid-cols-1 lg:grid-cols-3">
        {movies?.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
