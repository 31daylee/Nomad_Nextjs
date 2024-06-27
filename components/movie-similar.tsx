"use client";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import styles from "../styles/movie-similar.module.css";
import { IMAGE_URL } from "../app/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { getSimilar } from "../app/(movies)/movies/[id]/action";
import { useEffect, useState } from "react";
import MoviePoster from "./movie-poster";

interface Similar {
  poster_path?: string;
  id: string;
  title: string;
  release_date: string;
}

export default function MovieSimilar({ id }: { id: string }) {
  const [similarMovies, setSimilarMovies] = useState<null | Similar[]>(null);
  useEffect(() => {
    (async function () {
      await getSimilar(id).then((res) => setSimilarMovies(res));
    })();
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Similar Movies</h1>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className={styles.swiper}
      >
        {similarMovies &&
          similarMovies?.map((similarMovies) => (
            <SwiperSlide key={similarMovies.id} className={styles.slide}>
              <MoviePoster
                id={similarMovies.id}
                poster_path={`${IMAGE_URL.POSTER}${similarMovies.poster_path}`}
                title={similarMovies.title}
                release_date={similarMovies.release_date}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
