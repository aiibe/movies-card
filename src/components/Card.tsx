import { useAppDispatch } from "../redux/hooks";
import { removeMovie } from "../redux/reducer/movies";
import { Movie } from "../types/movies";
import Close from "./Close";
import Engage from "./Engage";
import RatioLikes from "./RatioLikes";

export default function Card({ item }: { item: Movie }) {
  const dispatch = useAppDispatch();

  return (
    <div className="border-2 p-4 rounded relative">
      <Close onClick={() => dispatch(removeMovie(item.id))} />
      <div className="mb-2">
        <h2 className="font-semibold text-xl">{item.title}</h2>
        <p className="text-sm">{item.category}</p>
      </div>
      <Engage itemId={item.id} />
      <RatioLikes likes={item.likes} dislikes={item.dislikes} />
    </div>
  );
}
