import { API_URL, IMAGE_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";
import HeroImage from "../components/movie-hero";
export async function getMovie(id: string) {
  const response = await fetch(
    `${API_URL}${id}?api_key=${process.env.API_KEY}`
  );
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.commonContainer}>
      <HeroImage
        backdropPath={movie.backdrop_path}
        title={movie.title}
        overview={movie.overview}
        releaseDate={movie.release_date}
        runtime={movie.runtime}
      />
      <div className={styles.container}>
        <img
          src={`${IMAGE_URL.POSTER}${movie.poster_path}`}
          className={styles.poster}
          alt={movie.title}
        />
        <div className={styles.info}>
          <p className={styles.storyline}>Storyline</p>
          {/* <Rating voteAverage={movie.vote_average} /> */}
          <p>{movie.overview}</p>
          <a
            className={styles.homepage}
            href={movie.homepage}
            target={"_blank"}
          >
            Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
