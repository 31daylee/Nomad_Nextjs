"use client";

import { IMAGE_URL } from "../app/constants";
import styles from "../styles/movie-series.module.css";
import { useEffect, useState } from "react";
import { getSeries } from "../app/(movies)/movies/[id]/action";

interface MovieGenre {
  name: string;
}

interface MovieSeries {
  poster_path?: string;
  name?: string;
  tagline?: string;
  overview?: string;
  homepage?: string;
  genres?: MovieGenre[];
}

export default function MovieSeries({ id }: { id: string }) {
  const [movie, setMovie] = useState<MovieSeries>({});
  useEffect(() => {
    (async function (id: string) {
      await getSeries(id).then((res) => setMovie(res));
    })(id);
  }, []);
  return (
    <div>
      <h1 className={styles.headline}>Series of {movie.name}</h1>
      <div className={styles.container}>
        <img
          src={`${IMAGE_URL.SMALL}${movie.poster_path}`}
          className={styles.poster}
          alt={movie.name}
        />
        <div className={styles.info}>
          <p className={styles.title}>Series title</p>
          <p>{movie.overview}</p>
          <div>
            <p>{movie.genres?.map((genre) => genre.name).join(" | ")}</p>
            <a className={styles.watch} href={movie.homepage} target={"_blank"}>
              WATCH NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
