import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <nav className="p-4">
      <div
        className="flex aspect-square h-32 cursor-pointer items-center justify-center rounded-lg border border-black p-4 text-xl font-semibold"
        onClick={() => navigate("/counter")}
      >
        Counter
      </div>
    </nav>
  );
}

export { Home };
