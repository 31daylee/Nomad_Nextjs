import { Suspense } from "react";
import Footer from "../../components/footer/footer";
import { API_KEY, API_URL } from "../constants";
import MovieContainer from "./movie-container";
import TopContainer from "./top-rated-container";
import UpcomingContainer from "./upcoming-container";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import Loading from "./loading";
export const metadata = {
  title: "Home",
};
async function fetchMovies(url) {
  const res = await fetch(url);
  if (!res.ok) {
    //throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data.results;
}
async function PopularMovies() {
  const movies = await fetchMovies(
    `${process.env.API_URL}popular?api_key=${process.env.API_KEY}`
  );
  return <MovieContainer movies={movies} />;
}

async function TopMovies() {
  const movies = await fetchMovies(
    `${process.env.API_URL}top_rated?api_key=${process.env.API_KEY}`
  );
  return <TopContainer movies={movies} />;
}

async function UpcomingMovies() {
  const movies = await fetchMovies(
    `${process.env.API_URL}upcoming?api_key=${process.env.API_KEY}`
  );
  return <UpcomingContainer movies={movies} />;
}

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <PopularMovies />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TopMovies />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <UpcomingMovies />
      </Suspense>
      <Footer />
    </>
  );
}
