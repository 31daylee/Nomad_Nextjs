"use client";

import React from "react";

import styles from "../../styles/home.module.css";

import Movie from "../../components/movie";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_URL } from "../constants";

export default function MovieContainer({ movies }: { movies: any }) {
  return (
    <div className={styles.container}>
      <div className={styles.spacer}>
        <h3 className={styles.cate}>Top-rated</h3>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={25}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
      >
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Movie
                id={movie.id}
                poster_path={`${IMAGE_URL.POSTER}${movie.poster_path}`}
                title={movie.title}
                release_date=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
