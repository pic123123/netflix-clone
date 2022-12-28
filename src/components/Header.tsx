import { Link } from "react-router-dom";

export default function Header() {
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/Tv"}>Tv</Link>
      </li>
      <li>
        <Link to={"/Search"}>Search</Link>
      </li>
    </ul>
  );
}
