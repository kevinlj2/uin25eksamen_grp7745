import { useParams } from "react-router-dom";

export default function EventPage({ festivals }) {
  const { id } = useParams();
  const event = festivals.find((festival) => festival.id === id);

  if (!event) return <p>Fant ikke event med ID: {id}</p>;

  const name = event._embedded?.attractions?.[0]?.name || event.name;
  const image = event.images?.[0]?.url;
  const description = event.info || event.description;

  return (
    <section>
      <h1>{name}</h1>
      {image && <img src={image} alt={name} />}
      <p>{description}</p>
    </section>
  );
}
