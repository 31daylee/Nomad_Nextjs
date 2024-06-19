import { API_URL } from "../constants";
import MovieContainer from "./movie-container";
export const metadata = {
  title: "Home",
};
async function getMovies() {
  return await fetch(API_URL).then((res) => res.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <>
      <MovieContainer movies={movies} />
    </>
  );
}
