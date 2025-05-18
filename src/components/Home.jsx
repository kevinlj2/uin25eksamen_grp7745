import { Link } from "react-router-dom";
import "../styles/_home.scss";

export default function EventCard({ festivals }) {
  return (
    <>
      {festivals?.map((festival) => {
        const Events = festival._embedded?.attractions?.[0]?.name;
        return (
          <article key={festival.id}>
            <img src={festival.images[0].url} alt={Events} />
            <h2>{Events}</h2>
            <Link to={`event/${festival.id}`}>Les mer om {Events}</Link>
          </article>
        );
      })}
    </>
  );
}
