import styles from "./button.module.css"
export function Button({name,link}) {
  return (
    <button className={styles.buttonBlue}>
      <a className={styles.link} href={link}>{name}</a>
    </button>
  );
}
