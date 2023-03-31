import styles from "./Header.module.css";
import Navbar from "./Navbar";
// import Logo from "../Logo";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navBarLine}>
        <div>
          {/* <Logo /> */}
          <Image src="/logo.png" alt="KubeKode" width="130" height="100" priority="high" />
        </div>
        <Navbar />
      </div>
    </header>
  );
}
