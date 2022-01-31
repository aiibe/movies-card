const RatioLikes = ({
  likes,
  dislikes,
}: {
  likes: number;
  dislikes: number;
}) => {
  const percent = {
    likes: (likes * 100) / (likes + dislikes) + "%",
    dislikes: (dislikes * 100) / (likes + dislikes) + "%",
  };

  return (
    <div className="flex">
      <div
        className="h-2"
        style={{ width: percent.likes, backgroundColor: "green" }}
      />
      <div
        className="h-2"
        style={{ width: percent.dislikes, backgroundColor: "red" }}
      />
    </div>
  );
};

export default RatioLikes;
