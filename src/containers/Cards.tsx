import { useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useAppSelector } from "../redux/hooks";

const Cards = () => {
  const [filterSelection, setFilterSelection] = useState<string[]>([]);
  const movies = useAppSelector((state) => state.movies);

  // Extract categories name
  const categories = [...new Set(movies.map((m) => m.category))];

  // Filter movies without losing source of truth
  let allMovies = [...movies];
  if (filterSelection.length) {
    allMovies = movies.filter((m) => filterSelection.includes(m.category));
  }

  // Event Handlers
  const handleSelected = (opt: string) => {
    const newFilter = filterSelection.includes(opt)
      ? filterSelection.filter((f) => f !== opt)
      : [...filterSelection, opt];
    setFilterSelection(newFilter);
  };

  return (
    <div className="mt-4 px-4">
      <Filter
        options={categories}
        selected={handleSelected}
        actives={filterSelection}
      />
      <div className="grid gap-4 md:grid-cols-2 sm: grid-cols-1 lg:grid-cols-3">
        {allMovies?.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
