import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer classNema={styles.FooterComteiner}>
      <ul>
        <li className={styles.li}>
          <a href="https://www.instagram.com/" className={styles.links}>
            <FaInstagram className={styles.icones} />
          </a>
        </li>
        <li className={styles.li}>
          <a href="https://web.whatsapp.com/" className={styles.links}>
            <FaWhatsapp className={styles.icones} />
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://www.linkedin.com/in/eriosvaldo-gomes/"
            className={styles.links}
          >
            <FaLinkedin className={styles.icones} />
          </a>
        </li>
        <li className={styles.li}>
          <a
            href="https://github.com/gomeseri?tab=repositories"
            className={styles.links}
          >
            <FaGithub className={styles.icones} />
          </a>
        </li>
      </ul>
      <p id={styles.Texto}>Obrigado</p>
    </footer>
  );
}

export default Footer;
