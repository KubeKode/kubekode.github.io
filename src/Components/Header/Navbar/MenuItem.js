import styles from "./Item.module.css";
export default function Item({name,link}) {
  return (
    <li className={styles.listItem}>
      <a className={styles.listItemLink} href={link}>
        {name}
      </a>
    </li>
  );
}
