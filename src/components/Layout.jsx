import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const Logo = () => {
    return (
      <Link to="/">
        <h1>BillettLyst</h1>
      </Link>
    );
  };

  return (
    <>
      <header>
        <Logo />
        <nav>
          <ul>
            <Link to="category/music">Musikk </Link>
            <Link to="category/sport">Sport </Link>
            <Link to="category/theatre">Teater/Show </Link>
            <Link to="dashboard">Logg Inn</Link>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
