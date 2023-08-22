import logo from "./logo.svg";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.comtainer}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
