"use client";

import { IMAGE_URL } from "../app/constants";
import styles from "../styles/movie-collection.module.css";
import { useEffect, useState } from "react";
import {
  getCollectionId,
  getCollection,
} from "../app/(movies)/movies/[id]/action";
import Rating from "./rating";
import MoviePoster from "./movie-poster";

interface Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface Parts {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export default function MovieCollection({ id }: { id: string }) {
  const [collection, setCollection] = useState<Collection | undefined>();
  const [parts, setParts] = useState<Parts[] | undefined>();

  useEffect(() => {
    (async function fetchCollection(id: string) {
      const collectionData = await getCollectionId(id);
      setCollection(collectionData);
      if (collectionData) {
        const partsData = await getCollection(collectionData.id);
        setParts(partsData);
      }
    })(id);
  }, [id]);

  return (
    <div>
      {collection && (
        <>
          <h1 className={styles.headline}>Collection</h1>
          <div className={styles.backdrop}>
            <img
              src={`${IMAGE_URL.BACKDROP}${collection.backdrop_path}`}
              className={styles.poster}
              alt={collection.name}
            />
            <div className={styles.backinfo}>
              <p className={styles.backtitle}>{collection.name}</p>
            </div>
          </div>
        </>
      )}
      {parts &&
        parts.map((part) => (
          <div key={part.id} className={styles.container}>
            <div className={styles.poster}>
              <MoviePoster
                id={part.id}
                poster_path={`${IMAGE_URL.POSTER}${part.poster_path}`}
                title={part.title}
                release_date={part.release_date}
              />
            </div>
            <div className={styles.info}>
              <p className={styles.title}>{part.title}</p>
              <div className={styles.smallInfo}>
                <Rating value={part.vote_average} />{" "}
                <span className={styles.average_number}>
                  {part.vote_average}
                </span>
                <span className={styles.separator}>|</span>
                <span className={styles.release_date}>
                  {part.release_date}
                </span>{" "}
              </div>
              <p className={styles.overview}>{part.overview}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
