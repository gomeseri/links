import styles from "./Header.module.css";
import fotoMotorista from "./assets/minhafoto.jpg";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img id={styles.fotoMotorista} src={fotoMotorista} alt="minha foto" />
      <p className={styles.headerNome}>Eriosvaldo Gomes</p>
    </header>
  );
}
export default Header;
