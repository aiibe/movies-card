import { useAppDispatch } from "../redux/hooks";
import { removeMovie } from "../redux/reducer/movies";
import { Movie } from "../types/movies";
import RatioLikes from "./RatioLikes";

export default function Card({ item }: { item: Movie }) {
  const dispatch = useAppDispatch();

  return (
    <div className="border-2 p-4 rounded">
      <h2 className="font-semibold">{item.title}</h2>
      <p>{item.category}</p>
      <RatioLikes likes={item.likes} dislikes={item.dislikes} />
      <div className="">
        <button onClick={() => dispatch(removeMovie(item.id))}>remove</button>
      </div>
    </div>
  );
}
