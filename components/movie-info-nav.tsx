"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/movie-info-nav.module.css";
import { useViewStore } from "../stores/viewStore";

export default function Navigation() {
  const setView = useViewStore((state) => state.setView);
  const [activeView, setActiveView] = useState<string>("overview");

  const handleClick = (view: string) => {
    setView(view);
    setActiveView(view);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li
          className={`${styles.navItem} ${
            activeView === "overview" ? styles.active : ""
          }`}
        >
          <Link href="#" onClick={() => handleClick("overview")}>
            OVERVIEW
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${
            activeView === "videos" ? styles.active : ""
          }`}
        >
          <Link href="#" onClick={() => handleClick("videos")}>
            VIDEOS
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${
            activeView === "collection" ? styles.active : ""
          }`}
        >
          <Link href="#" onClick={() => handleClick("collection")}>
            COLLECTION
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${
            activeView === "review" ? styles.active : ""
          }`}
        >
          <Link href="#" onClick={() => handleClick("review")}>
            REVIEW
          </Link>
        </li>
      </ul>
    </nav>
  );
}
