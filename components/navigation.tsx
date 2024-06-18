"use client";
import Link from "next/link";
import styles from "../styles/navigation.module.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <p className={styles.logo}>NEXTFILM</p>

        <li>
          <Link href="/about-us">About</Link>
        </li>
      </ul>
    </nav>
  );
}
