import { API_URL, IMAGE_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";
import MoiveCredits from "./movie-credits";
export async function getMovie(id: string) {
  const response = await fetch(
    `${API_URL}${id}?api_key=${process.env.API_KEY}`
  );
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const genreNames = movie.genres.map((genre) => genre.name).join(" | ");
  return (
    <div className={styles.commonContainer}>
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
          <p>{genreNames}</p>
          <a
            className={styles.homepage}
            href={movie.homepage}
            target={"_blank"}
          >
            WATCH TRAILER▶
          </a>
        </div>
      </div>
      <MoiveCredits id={id} />
    </div>
  );
}
