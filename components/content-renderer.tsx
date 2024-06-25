import { useViewStore } from "../stores/viewStore";
import MovieInfo from "./movie-info";
import MovieVideos from "./movie-videos";

export default function ContentRenderer({ id }: { id: string }) {
  const currentView = useViewStore((state) => state.currentView);

  switch (currentView) {
    case "overview":
      return <MovieInfo id={id} />;
    case "videos":
      return <MovieVideos id={id} />;
    default:
      return null;
  }
}
