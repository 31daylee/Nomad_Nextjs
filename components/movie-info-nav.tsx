"use client";

import Link from "next/link";
import styles from "../styles/movie-info-nav.module.css";
import { useViewStore } from "../stores/viewStore";

export default function Navigation({ id }: { id: string }) {
  const setView = useViewStore((state) => state.setView);

  const handleClick = (view: string) => {
    setView(view);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="#" onClick={() => handleClick("overview")}>
            OVERVIEW
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleClick("videos")}>
            VIDEOS
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleClick("collections")}>
            COLLECTIONS
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => handleClick("homepage")}>
            HOMEPAGE
          </Link>
        </li>
      </ul>
    </nav>
  );
}
