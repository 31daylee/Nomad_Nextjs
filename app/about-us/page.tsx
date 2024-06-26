import Image from "next/image";
import nextImage from "../asserts/next-logo.png";
import NomadImage from "../asserts/nomad-logo.png";
import styles from "../../styles/about-us/about-us.module.css";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={nextImage} width={300} height={300} alt="Next.js Logo" />
        <p className={styles.cross}>X</p>
        <Image src={NomadImage} width={300} height={300} alt="Nomad Logo" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Movie Application with NEXT.JS 14
          <br />
          This referred to the Nomad Coder lecture about Next.js for beginner.
          <br />
          Copyright © 2024 31daylee all rights reserved.
        </p>
      </div>
    </div>
  );
}
