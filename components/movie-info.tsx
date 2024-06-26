"use client";

import { IMAGE_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";
import { useEffect, useState } from "react";
import { getMovie } from "../app/(movies)/movies/[id]/action";
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

export default function MovieInfo({ id }: { id: string }) {
  const [movie, setMovie] = useState<Movie>({});
  useEffect(() => {
    (async function (id: string) {
      await getMovie(id).then((res) => setMovie(res));
    })(id);
  }, []);
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
          <a className={styles.button} href={movie.homepage} target={"_blank"}>
            WATCH TRAILER▶
          </a>
        </div>
      </div>
      <MovieCredits id={id} />
      <MovieSimilar id={id} />
    </div>
  );
}
