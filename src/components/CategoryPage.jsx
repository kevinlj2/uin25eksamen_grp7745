import { useParams } from "react-router-dom";
import "../styles/_header.scss";

export default function CategoryPage() {
  const { slug } = useParams();

  return <h1>{slug}</h1>;
}
