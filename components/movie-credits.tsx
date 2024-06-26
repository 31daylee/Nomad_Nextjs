"use client";

import styels from "../styles/movie-credits.module.css";
import { getCredits } from "../app/(movies)/movies/[id]/action";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_URL } from "../app/constants";
import defaultProfile from "../app/asserts/default-profile-image.webp";
import { Swiper, SwiperSlide } from "swiper/react";

export interface Credit {
  id: string;
  name: string;
  profile_path: string;
  character: string;
}

export default function MovieCredits({ id }: { id: string }) {
  const [credits, setCredits] = useState<Credit[]>([]);
  useEffect(() => {
    (async function () {
      await getCredits(id).then((res) => {
        setCredits(res);
      });
    })();
  }, []);
  const swiperParams = {
    spaceBetween: 10,
    slidesPerView: 10,
    navigation: true,
    pagination: { clickable: true },
  };
  return (
    <div className={styels.container}>
      <h1 className={styels.title}>Cast</h1>
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
                  <div>
                    <div className={styels.name}>{credit.name}</div>
                    <div className={styels.character}>{credit.character}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
