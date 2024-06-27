"use client";
import { useViewStore } from "../stores/viewStore";
import MovieInfo from "./movie-info";
import MovieVideos from "./movie-videos";
import MovieCollections from "./movie-collection";
import MovieReview from "./movie-review";

export default function ContentRenderer({ id }: { id: string }) {
  const currentView = useViewStore((state) => state.currentView);

  switch (currentView) {
    case "overview":
      return <MovieInfo id={id} />;
    case "videos":
      return <MovieVideos id={id} />;
    case "collection":
      return <MovieCollections id={id} />;
    case "review":
      return <MovieReview id={id} />;
    default:
      return <MovieInfo id={id} />;
  }
}
