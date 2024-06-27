"use client";

import { IMAGE_URL } from "../app/constants";
import styles from "../styles/movie-series.module.css";
import { useEffect, useState } from "react";
import {
  getCollectionId,
  getCollection,
} from "../app/(movies)/movies/[id]/action";

interface Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
interface Parts {
  id: number;
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
          <h1 className={styles.headline}>Collection: {collection.name}</h1>
          <div className={styles.container}>
            <img
              src={`${IMAGE_URL.SMALL}${collection.poster_path}`}
              className={styles.poster}
              alt={collection.name}
            />
            <div className={styles.info}>
              <p className={styles.title}>{collection.name}</p>
            </div>
          </div>
        </>
      )}
      {parts &&
        parts.map((part) => (
          <div key={part.id} className={styles.container}>
            <img
              src={`${IMAGE_URL.SMALL}${part.poster_path}`}
              className={styles.poster}
              alt={part.title}
            />
            <div className={styles.info}>
              <p className={styles.title}>{part.title}</p>
              <p className={styles.overview}>{part.overview}</p>
              <p className={styles.release_date}>
                Release Date: {part.release_date}
              </p>
              <p className={styles.vote_average}>Rating: {part.vote_average}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
