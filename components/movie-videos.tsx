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
  const latestVideos = videos?.slice(0, 15);
  return (
    <div className={styles.container}>
      {latestVideos?.map((latestVideos) => (
        <iframe
          key={latestVideos.id}
          src={`https://youtube.com/embed/${latestVideos.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
          title={latestVideos.name}
        />
      ))}
    </div>
  );
}
