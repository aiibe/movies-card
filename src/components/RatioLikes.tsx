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

export default RatioLikes;
