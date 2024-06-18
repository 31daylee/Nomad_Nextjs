"use client";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import Footer from "../../components/footer/footer";

async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
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
          {movies.map((movie) => (
            <SwiperSlide>
              <Movie
                id={movie.id}
                key={movie.id}
                poster_path={movie.poster_path}
                title=""
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className={styles.spacer}>
        <h3>Popular</h3>
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
              poster_path={movie.poster_path}
              title={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.spacer}>
        <h3>New</h3>
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
              poster_path={movie.poster_path}
              title={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer></Footer>
    </div>
  );
}
