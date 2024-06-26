"use client";

import React from "react";
import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_URL } from "../constants";

export default function MovieContainer({ movies }: { movies: any }) {
  return (
    <div className={styles.container}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        navigation={true}
        mousewheel={true}
        modules={[EffectCoverflow, Navigation, Mousewheel]}
        className="mySwiper"
      >
        <div className="container">
          {movies &&
            movies.map((movie, idx) => (
              <SwiperSlide key={`${idx}-first-movie`}>
                <Movie
                  id={movie.id}
                  key={movie.id}
                  poster_path={`${IMAGE_URL.POSTER}${movie.poster_path}`}
                  title=""
                  release_date=""
                />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
}
