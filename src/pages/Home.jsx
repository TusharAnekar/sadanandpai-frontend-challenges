import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <NavLink to={"/counter"}>Counter</NavLink>
      </nav>
    </div>
  );
}

export { Home };
