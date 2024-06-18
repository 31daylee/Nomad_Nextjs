import styles from "../footer/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        Copyright © 2024 31daylee all rights reserved.
      </div>
      <div className="contact fl-center fl-row">
        <a href="mailto: 31daylee@gmail.com">
          <i className="fas fa-envelope fa-2x" style={{ color: "#d1d1d1" }}></i>
        </a>
        <a href="https://github.com/31daylee/Nomad_Nextjs">
          <i className="fab fa-github fa-2x" style={{ color: "#d1d1d1" }}></i>
        </a>
      </div>
    </div>
  );
}
