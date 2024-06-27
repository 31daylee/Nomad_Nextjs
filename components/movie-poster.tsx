"use client";
import Link from "next/link";
import styles from "../styles/movie-poster.module.css";
import { useRouter } from "next/navigation";

interface MoviePoster {
  title: string;
  id: string;
  poster_path: string;
  release_date: string;
}
export default function MoviePoster({ title, id, poster_path }: MoviePoster) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`} className={styles.title}></Link>
    </div>
  );
}
