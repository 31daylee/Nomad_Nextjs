import Image from "next/image";
import styles from "../styles/movie-hero.module.css";
import { IMAGE_URL } from "../app/constants";

const {
  heroContent,
  heroImage,
  heroWrapper,
  heroTitle,
  heroOverview,
  heroInfo,
} = styles;

const HeroImage = ({ backdropPath, title, overview, releaseDate, runtime }) => {
  const getYearFromDate = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };
  return (
    <div className={heroWrapper}>
      <Image
        className={heroImage}
        priority
        src={`${IMAGE_URL.BACKDROP}${backdropPath}`}
        layout="fill"
        alt="hero image example"
      />
      <div className={heroContent}>
        <h1 className={heroTitle}>{title}</h1>
        <div className={heroInfo}>
          <p>
            {getYearFromDate(releaseDate)} | {runtime} min
          </p>
        </div>
        <p className={heroOverview}>{overview}</p>
      </div>
    </div>
  );
};

export default HeroImage;
