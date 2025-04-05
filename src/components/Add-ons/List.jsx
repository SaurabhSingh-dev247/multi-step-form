import styles from "./AddOns.module.css"

export function List({
  listAbout,
  listDescription,
  price,
  uniqueId,
  changeHandler,
  isSelected,
}) {
  const classes = `${styles.label} ${isSelected ? styles.active : ""}`;
  return (
    <li className={styles.listItem}>
      <label
        className={classes}
        role="button"
        htmlFor={uniqueId}
      >
        <div className={styles.addOnContent}>
          <input
            type="checkbox"
            name={uniqueId}
            id={uniqueId}
            checked={isSelected}
            onChange={changeHandler}
          />
          <div className={styles.addOnText}>
            <strong className={styles.primaryText}>{listAbout}</strong>
            <span className={styles.secondaryText}>{listDescription}</span>
          </div>
        </div>
        <p className={styles.priceText}>{price}</p>
      </label>
    </li>
  );
}
