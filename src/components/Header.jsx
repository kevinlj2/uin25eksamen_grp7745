import { Link } from "react-router-dom";
import "../styles/_header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/" id="logo">
            BillettLyst
          </Link>
          <li>
            <Link to="category/music">Musikk </Link>
          </li>
          <li>
            <Link to="category/sport">Sport </Link>
          </li>
          <li>
            <Link to="category/theatre">Teater/Show </Link>
          </li>
          <Link to="dashboard" id="login">
            Logg Inn
          </Link>
        </ul>
      </nav>
    </header>
  );
}
