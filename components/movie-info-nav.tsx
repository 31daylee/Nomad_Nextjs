"use client";
import Link from "next/link";
import styles from "../styles/movie-info-nav.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">OVERVIEW</Link>
        </li>
        <li>
          <Link href="/">VIDEOS</Link>
        </li>
        <li>
          <Link href="/about-us">COLLECTIONS</Link>
        </li>
        <li>
          <Link href="/about-us">HOMEPAGE</Link>
        </li>
      </ul>
    </nav>
  );
}
