import Footer from "../../../../components/footer/footer";
import MovieHero from "../../../../components/movie-hero";
import MovieInfoNav from "../../../../components/movie-info-nav";
import ContentRenderer from "../../../../components/content-renderer";
import { Suspense } from "react";
import { getMovie } from "../../../../components/movie-info";

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
      <MovieInfoNav id={id} />
      <ContentRenderer id={id} />
      <Footer />
    </div>
  );
}
