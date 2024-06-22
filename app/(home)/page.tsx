import { Suspense } from "react";
import Footer from "../../components/footer/footer";
import { API_URL } from "../constants";
import MovieContainer from "./movie-container";
import TopContainer from "./top-rated-container";
import UpcomingContainer from "./upcoming-container";
import Loading from "./loading";
export const metadata = {
  title: "Home",
};
const api_key = process.env.API_KEY;
async function getPopularMovies() {
  const res = await fetch(`${API_URL}popular?api_key=${api_key}`).then((res) =>
    res.json()
  );
  return res.results;
}
async function getTopMovies() {
  const res = await fetch(`${API_URL}top_rated?api_key=${api_key}`).then(
    (res) => res.json()
  );
  return res.results;
}

async function getUpcomingMovies() {
  const res = await fetch(`${API_URL}upcoming?api_key=${api_key}`).then((res) =>
    res.json()
  );

  return res.results;
}

export default async function HomePage() {
  const popular = await getPopularMovies();
  const top = await getTopMovies();
  const upcoming = await getUpcomingMovies();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MovieContainer movies={popular} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TopContainer movies={top} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <UpcomingContainer movies={upcoming} />
      </Suspense>
      <Footer />
    </>
  );
}
