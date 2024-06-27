"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "../footer/footer.module.css";

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = "mailto:31daylee@gmail.com";
  };
  const handleGitClick = () => {
    window.location.href = "https://github.com/31daylee/Nomad_Nextjs";
  };

  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Copyright © 2024 31daylee all rights reserved.
      </div>
      <div className={styles.iconContainer}>
        <a href="mailto:31daylee@gmail.com" className={styles.link}>
          <FontAwesomeIcon
            className={styles.logo}
            icon={faEnvelope}
            onClick={handleEmailClick}
          />
        </a>
        <a
          href="https://github.com/31daylee/Nomad_Nextjs"
          className={styles.link}
        >
          <FontAwesomeIcon
            className={styles.logo}
            icon={faGithub}
            onClick={handleGitClick}
          />
        </a>
      </div>
      <div className={styles.info}></div>
    </div>
  );
}
