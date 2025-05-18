import { Link } from "react-router-dom";
import "../styles/_header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" id="logo">
              BillettLyst
            </Link>
          </li>
          <li>
            <Link to="category/music">Musikk </Link>
          </li>
          <li>
            <Link to="category/sport">Sport </Link>
          </li>
          <li>
            <Link to="category/theatre">Teater/Show </Link>
          </li>
          <li>
            <Link to="dashboard">Logg Inn</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
