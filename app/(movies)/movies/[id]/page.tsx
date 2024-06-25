import Footer from "../../../../components/footer/footer";
import MoiveCredits from "../../../../components/movie-credits";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieHero from "../../../../components/movie-hero";
import MovieInfoNav from "../../../../components/movie-info-nav";

import { Suspense } from "react";
interface IParams {
  params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}
export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie hero</h1>}>
        <MovieHero id={id} />
      </Suspense>
      <MovieInfoNav id={id}></MovieInfoNav>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Footer></Footer>
    </div>
  );
}
