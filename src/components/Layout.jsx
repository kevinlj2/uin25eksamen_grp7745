import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Hjem</Link>
          <Link to="/event/:id"></Link>
          <Link to="/category/:slug"></Link>
          <Link to="/dashboard"></Link>
        </nav>
      </header>
      {children}
    </>
  );
}
