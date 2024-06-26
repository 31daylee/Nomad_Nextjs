"use client";

import styles from "../styles/movie-videos.module.css";
import { useEffect, useState } from "react";
import { getVideos } from "../app/(movies)/movies/[id]/action";

export interface Video {
  id: string;
  key: string;
  name: string;
}

export default function MovieVideos({ id }: { id: string }) {
  const [videos, setVideos] = useState<null | Video[]>(null);
  useEffect(() => {
    (async function () {
      await getVideos(id).then((res) => setVideos(res));
    })();
  }, []);
  return (
    <div className={styles.container}>
      {videos?.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
