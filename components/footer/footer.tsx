import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../footer/footer.module.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Copyright © 2024 31daylee all rights reserved.
      </div>
      <div className={styles.info}>
        <a href="mailto: 31daylee@gmail.com">
          <FontAwesomeIcon
            className={styles.logo}
            icon={faEnvelope}
            style={{ color: "#000000" }}
          />
        </a>
        <a href="https://github.com/31daylee/Nomad_Nextjs">
          <FontAwesomeIcon
            className={styles.logo}
            icon={faGithub}
            style={{ color: "#000000" }}
          />
        </a>
      </div>
    </div>
  );
}
