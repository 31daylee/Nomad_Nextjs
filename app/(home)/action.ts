import { API_URL } from "../constants";

const api_key = process.env.API_KEY;
export async function getPopularMovies() {
  const res = await fetch(`${API_URL}popular?api_key=${api_key}`).then((res) =>
    res.json()
  );
  return res.results;
}
export async function getTopMovies() {
  const res = await fetch(`${API_URL}top_rated?api_key=${api_key}`).then(
    (res) => res.json()
  );
  return res.results;
}

export async function getUpcomingMovies() {
  const res = await fetch(`${API_URL}upcoming?api_key=${api_key}`).then((res) =>
    res.json()
  );
  return res.results;
}
