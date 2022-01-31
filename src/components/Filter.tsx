const buttonStyle = {
  active: "px-4 border-2 rounded-full ml-2 mb-2 bg-slate-600 text-white",
  normal:
    "px-4 border-2 rounded-full ml-2 mb-2 hover:bg-slate-600 hover:text-white",
};

export default function Filter({
  selected,
  options,
  actives,
}: {
  selected: (option: string) => void;
  options: string[];
  actives: string[];
}) {
  return (
    <div className="flex flex-wrap mb-4">
      <span className="mr-4">Filter</span>
      {options.map((opt) => (
        <button
          className={
            actives.includes(opt) ? buttonStyle.active : buttonStyle.normal
          }
          key={opt}
          onClick={() => selected(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
