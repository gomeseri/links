import styles from "./Main.module.css";
function Main() {
  return (
    <main className={styles.mainContainer}>
      <ul id={styles.mainUl}>
        <li>
          <a
            href="https://gomeseri.github.io/NFTs/"
            className={styles.mainlinks}
          >
            Veja meu Portfólio
          </a>
        </li>
        <li>
          <a
            href="https://gomeseri.github.io/NFTs/"
            className={styles.mainlinks}
          >
            Saiba mais Sonbre min
          </a>
        </li>
        <li>
          <a
            href="https://gomeseri.github.io/NFTs/"
            className={styles.mainlinks}
          >
            Contato
          </a>
        </li>
        <li>
          <a
            href="https://gomeseri.github.io/NFTs/"
            className={styles.mainlinks}
          >
            Linguagens de Programação
          </a>
        </li>
      </ul>
    </main>
  );
}
export default Main;
