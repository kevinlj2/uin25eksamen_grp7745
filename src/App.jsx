import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EventPage from "./components/EventPage";
import CategoryPage from "./components/CategoryPage";
import Dashboard from "./components/Dashboard";

function App() {
  const [festivals, setFestivals] = useState([]);

  const FestivalEvents = [
    "Z698xZb_Z17q339",
    "Z698xZb_Z16v7eGkFy",
    "Z698xZb_Z17qfaA",
    "Z698xZb_Z17q3qg",
  ];

  const getFestivals = async () => {
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=jj8DstPJ27elraSgsFdMAgqVpAMAGILh"
    )
      .then((response) => response.json())
      .then((data) => setFestivals(data.data))
      .catch((error) => console.error("Skjedde en feil ved fetch", error));
  };

  useEffect(() => {
    getFestivals();
    console.log("Min state", festivals);
  });

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
