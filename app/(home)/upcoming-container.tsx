"use client";

import React from "react";

import styles from "../../styles/home.module.css";

import Movie from "../../components/movie";
import Footer from "../../components/footer/footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_BASE_URL } from "../constants";

export default function MovieContainer({ movies }: { movies: any }) {
  return (
    <div className={styles.container}>
      <div className={styles.spacer}>
        <h3 className={styles.cate}>Upcoming</h3>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={25}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie
              id={movie.id}
              poster_path={`${IMAGE_BASE_URL}w500${movie.poster_path}`}
              title={movie.title}
              release_date={movie.release_date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}