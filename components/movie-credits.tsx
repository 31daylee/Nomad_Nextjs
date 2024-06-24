import { API_URL } from "../app/constants";
import CreditContainer from "./movie-credits-container";
import styels from "../styles/movie-credits.module.css";

export async function getCredits(id: string) {
  const response = await fetch(
    `${API_URL}${id}/credits?api_key=${process.env.API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch credits for movie with id ${id}`);
  }
  const data = await response.json();
  return data.cast;
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);

  return (
    <div className={styels.container}>
      <h1 className={styels.title}>Cast</h1>
      <CreditContainer credits={credits} />
    </div>
  );
}
