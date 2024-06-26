import Image from "next/image";
import styles from "../styles/movie-hero.module.css";
import { API_URL, IMAGE_URL } from "../app/constants";
import MovieRating from "../components/rating";

const {
  commonContainer,
  heroContent,
  heroImage,
  heroWrapper,
  heroTitle,
  heroOverview,
  heroInfo,
} = styles;

export async function getMovie(id: string) {
  const response = await fetch(
    `${API_URL}${id}?api_key=${process.env.API_KEY}`
  );
  return response.json();
}

export default async function HeroImage({ id }: { id: string }) {
  const movie = await getMovie(id);
  const getYearFromDate = (release_date) => {
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
            <p>
              {/* <MovieRating value={movie.vote_average} /> */}
              {getYearFromDate(movie.release_date)} | {movie.runtime} min
            </p>
          </div>
          <p className={heroOverview}>
            {movie.overview.length > 300
              ? `${movie.overview.slice(0, 300)}...`
              : movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
