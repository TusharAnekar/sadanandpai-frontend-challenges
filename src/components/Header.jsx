import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-500 p-4 text-2xl font-bold">
      <h1 className="cursor-pointer" onClick={() => navigate("/")}>
        Sadanand Pai Frontend Challenges
      </h1>
    </header>
  );
}

export { Header };
