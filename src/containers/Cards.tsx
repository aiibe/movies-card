import { ChangeEventHandler, useState } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useAppSelector } from "../redux/hooks";

const Cards = () => {
  const itemsPage = [4, 8, 12];
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPage[0]);
  const [filterSelection, setFilterSelection] = useState<string[]>([]);
  const movies = useAppSelector((state) => state.movies);

  // Extract categories name
  const categories = [...new Set(movies.map((m) => m.category))];

  // Filter movies without losing source of truth
  let allMovies = [...movies];
  if (filterSelection.length) {
    allMovies = movies.filter((m) => filterSelection.includes(m.category));
  }

  // Pagination
  const pagesCount = Math.ceil(allMovies.length / itemsPerPage);
  const showMovies = filterSelection.length ? allMovies : movies;
  allMovies = showMovies.slice(
    itemsPerPage * currentPage,
    itemsPerPage * (currentPage + 1)
  );

  // Event Handlers
  const handleSelected = (opt: string) => {
    const newFilter = filterSelection.includes(opt)
      ? filterSelection.filter((f) => f !== opt)
      : [...filterSelection, opt];
    setFilterSelection(newFilter);
  };

  const handleSelectPage: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  return (
    <div className="mt-4 px-4">
      <Filter
        options={categories}
        selected={handleSelected}
        actives={filterSelection}
      />
      <div className="grid gap-4 md:grid-cols-2 sm: grid-cols-1">
        {allMovies?.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* Paginate */}
      <div className="flex items-center justify-between my-2">
        <div className="flex items-center">
          <span className="mr-2">Items per page</span>
          <select
            className="border"
            value={itemsPerPage}
            onChange={handleSelectPage}
          >
            {itemsPage.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          {pagesCount > 1 &&
            [...Array(pagesCount)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`px-3 ml-1 bg-gray-300 hover:bg-gray-400 text-white ${
                  currentPage === i && "bg-gray-500"
                }`}
              >
                {i + 1}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
