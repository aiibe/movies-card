import { useAppDispatch } from "../redux/hooks";
import { removeMovie } from "../redux/reducer/movies";
import { Movie } from "../types/movies";
import Close from "./Close";
import RatioLikes from "./RatioLikes";

export default function Card({ item }: { item: Movie }) {
  const dispatch = useAppDispatch();

  return (
    <div className="border-2 p-4 rounded relative">
      <Close onClick={() => dispatch(removeMovie(item.id))} />
      <h2 className="font-semibold text-xl">{item.title}</h2>
      <p className="text-sm">{item.category}</p>
      <RatioLikes likes={item.likes} dislikes={item.dislikes} />
    </div>
  );
}
