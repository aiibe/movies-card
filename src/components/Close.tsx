export default function Close({ onClick }: { onClick: () => void }) {
  return (
    <button className="absolute top-2 right-2" onClick={onClick}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#000"
          strokeWidth="2"
          d="M7,7 L17,17 M7,17 L17,7"
        ></path>
      </svg>
    </button>
  );
}
