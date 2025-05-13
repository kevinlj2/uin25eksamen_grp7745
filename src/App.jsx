import { useEffect, useState } from "react";

function App() {
  const [festivals, setFestivals] = useState();

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
  return;
}

export default App;
