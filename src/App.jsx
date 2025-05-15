import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EventPage from "./components/EventPage";
import CategoryPage from "./components/CategoryPage";
import Dashboard from "./components/Dashboard";

function App() {
  const [festivals, setFestivals] = useState([]);

  //ID-er er funnet via https://developer.ticketmaster.com/api-explorer/v2/ og bruk av parametere.
  const FestivalEvents = [
    "Z698xZb_Z17q339",
    "Z698xZb_Z16v7eGkFy",
    "Z698xZb_Z17qfaA",
    "Z698xZb_Z17q3qg",
  ];

  const getFestivals = async () => {
    const eventUrls = FestivalEvents.map((id) =>
      fetch(
        `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=jj8DstPJ27elraSgsFdMAgqVpAMAGILh`
      ).then((res) => res.json())
    );

    try {
      const events = await Promise.all(eventUrls);
      setFestivals(events);
    } catch (error) {
      console.log("Skjedde en feil ved fetch", error);
    }
  };

  useEffect(() => {
    getFestivals();
    console.log("Min state", festivals);
  });

  useEffect(() => {
    console.log(festivals);
  }, [festivals]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home festivals={festivals} />} />
        <Route
          path="/event/:id"
          element={<EventPage festivals={festivals} />}
        />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
