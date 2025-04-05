import styles from "./PlanSelector.module.css"

export default function Card({
  src,
  cardDescription,
  cardPrice,
  yearlySelected,
  onClick,
  isActive,
}) {
  let classes = `${styles["cards"]}`;
  if (isActive) {
    classes = `${styles["cards"]} ${styles["active-card"]}`;
  }

  let result;
  if (yearlySelected) {
    result = <span className={`${styles["yearly-text"]}`}>2 months free</span>;
  }

  return (
    <button className={classes} onClick={onClick}>
      <img src={src} />
      <p>
        <span className={styles["plan-description"]}>{cardDescription}</span>
        <span className={styles["plan-value"]}>{cardPrice}</span>
        {result}
      </p>
    </button>
  );
}
