import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Logo from "../Logo";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navBarLine}>
        <div>
          <Logo />
        </div>
        <Navbar />
      </div>
    </header>
  );
}
