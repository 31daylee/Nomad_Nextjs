"use client";
import { useViewStore } from "../stores/viewStore";
import MovieInfo from "./movie-info";
import MovieVideos from "./movie-videos";
import MovieSeries from "./movie-series";
import MovieReview from "./movie-review";

export default function ContentRenderer({ id }: { id: string }) {
  const currentView = useViewStore((state) => state.currentView);

  switch (currentView) {
    case "overview":
      return <MovieInfo id={id} />;
    case "videos":
      return <MovieVideos id={id} />;
    case "series":
      return <MovieSeries id={id} />;
    case "review":
      return <MovieReview id={id} />;
    default:
      return <MovieInfo id={id} />;
  }
}
