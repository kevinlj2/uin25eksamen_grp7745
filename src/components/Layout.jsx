import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        https://developer.ticketmaster.com/api-explorer/v2/apikey=jj8DstPJ27elraSgsFdMAgqVpAMAGILh
      </footer>
    </>
  );
}
