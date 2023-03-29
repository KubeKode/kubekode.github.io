import styles from "./Menu.module.css";
import Item from "./MenuItem";
import { Button } from "@/Components/BigButton";
export default function Navbar() {
  return (
    <div className={styles.menu}>
      <ul className={styles.listGroup}>
        <Item name="Home" link="/" />
        <Item name="About" link="/about" />
        <Item name="Courses" link="/courses" />
        <Item name="Services" link="/services" />
        <Item name="Blogs" link="/blogs" />
        <Button name="Partner" link="/partner" />
      </ul>
    </div>
  );
}
