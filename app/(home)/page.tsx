import { Suspense } from "react";
import Footer from "../../components/footer/footer";
import MovieContainer from "./movie-container";
import TopContainer from "./top-rated-container";
import UpcomingContainer from "./upcoming-container";
import Loading from "./loading";
import { getPopularMovies, getTopMovies, getUpcomingMovies } from "./action";
export const metadata = {
  title: "Home",
};

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
