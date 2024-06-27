"use client";

import { IMAGE_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";
import { useEffect, useState } from "react";
import { getMovie, getVideos } from "../app/(movies)/movies/[id]/action";
import MovieCredits from "./movie-credits";
import MovieSimilar from "./movie-similar";

interface MovieGenre {
  name: string;
}

interface Movie {
  poster_path?: string;
  title?: string;
  tagline?: string;
  overview?: string;
  homepage?: string;
  genres?: MovieGenre[];
}

interface Video {
  id: string;
  key: string;
  name: string;
}

export default function MovieInfo({ id }: { id: string }) {
  const [movie, setMovie] = useState<Movie>({});
  const [videos, setVideos] = useState<null | Video[]>(null);

  useEffect(() => {
    (async function () {
      await getVideos(id).then((res) => setVideos(res));
    })();
  }, [id]);

  const handleTrailer = () => {
    if (videos && videos.length > 0) {
      const width = 700;
      const height = 500;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      const popup = window.open(
        `https://youtube.com/embed/${videos[0].key}`,
        "Trailer",
        `width=${width},height=${height},left=${left},top=${top}`
      );
    }
  };

  useEffect(() => {
    (async function () {
      await getMovie(id).then((res) => setMovie(res));
    })();
  }, [id]);

  return (
    <div>
      <div className={styles.container}>
        <img
          src={`${IMAGE_URL.POSTER}${movie.poster_path}`}
          className={styles.poster}
          alt={movie.title}
        />
        <div className={styles.info}>
          <p className={styles.tagline}>"{movie.tagline}"</p>
          <p className={styles.storyline}>Storyline</p>
          <p>{movie.overview}</p>
          <p>{movie.genres?.map((genre) => genre.name).join(" | ")}</p>
          <button className={styles.button} onClick={handleTrailer}>
            WATCH TRAILER▶
          </button>
        </div>
      </div>
      <MovieCredits id={id} />
      <MovieSimilar id={id} />
    </div>
  );
}
