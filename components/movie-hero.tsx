"use client";
import Image from "next/image";
import styles from "../styles/movie-hero.module.css";
import { API_URL, IMAGE_URL } from "../app/constants";
import Rating from "../components/rating";
import { useEffect, useState } from "react";
import { getMovie } from "../app/(movies)/movies/[id]/action";

const {
  commonContainer,
  heroContent,
  heroImage,
  heroWrapper,
  heroTitle,
  heroOverview,
  heroInfo,
} = styles;

interface Movie {
  backdrop_path?: string;
  runtime?: number;
  overview?: string;
  release_date?: string;
  vote_average?: number;
  title?: string;
}

export default function HeroImage({ id }: { id: string }) {
  const [movie, setMovie] = useState<Movie>({});

  useEffect(() => {
    (async function () {
      const fetchedMovie = await getMovie(id);
      setMovie(fetchedMovie);
    })();
  }, [id]);

  const getYearFromDate = (release_date: string | undefined) => {
    if (!release_date) return "";
    const date = new Date(release_date);
    return date.getFullYear();
  };

  return (
    <div className={commonContainer}>
      <div className={heroWrapper}>
        <Image
          className={heroImage}
          priority
          src={`${IMAGE_URL.BACKDROP}${movie.backdrop_path}`}
          layout="fill"
          alt="hero image example"
        />
        <div className={heroContent}>
          <h1 className={heroTitle}>{movie.title}</h1>
          <div className={heroInfo}>
            <Rating value={movie.vote_average} />
            <span className={styles.separator}>|</span>
            <span>{getYearFromDate(movie.release_date)}</span>
            <span className={styles.separator}>|</span>
            <span>{movie.runtime} min</span>
          </div>
          <p className={heroOverview}>
            {movie.overview && movie.overview.length > 350
              ? `${movie.overview.slice(0, 350)}...`
              : movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
