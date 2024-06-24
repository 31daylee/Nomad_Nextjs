"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { IMAGE_URL } from "../app/constants";
import defaultProfile from "../app/asserts/default-profile-image.webp";
import styles from "../styles/movie-credits-swiper.module.css";

export default function MovieCredits({ credits }: { credits: any }) {
  const swiperParams = {
    spaceBetween: 10,
    slidesPerView: 10,
    navigation: true,
    pagination: { clickable: true },
  };

  return (
    <div>
      <Swiper {...swiperParams}>
        {credits
          .filter((credit) => credit.character)
          .map((credit) => (
            <SwiperSlide key={credit.id}>
              <div className="swiper-slide">
                {credit.profile_path ? (
                  <Image
                    src={`${IMAGE_URL.POSTER}${credit.profile_path}`}
                    width={100}
                    height={150}
                    alt={credit.name}
                  />
                ) : (
                  <Image
                    src={defaultProfile}
                    width={100}
                    height={150}
                    alt={credit.name}
                  />
                )}
                <div>{credit.name}</div>
                <div>{credit.character}</div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
