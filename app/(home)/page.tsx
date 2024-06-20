import { API_KEY, API_URL } from "../constants";
import MovieContainer from "./movie-container";
export const metadata = {
  title: "Home",
};
async function getMovies() {
  const res = await fetch(`${API_URL}/movie/upcoming?api_key=${API_KEY}`); // upcoming, popular
  const data = await res.json();
  return data.results;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <>
      <MovieContainer movies={movies} />
    </>
  );
}
