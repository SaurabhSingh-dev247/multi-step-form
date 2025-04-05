import styles from "./FinishingUp.module.css";
import Total from "./Total.jsx";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

export default function ({ finishingUpGoback, finishingUpNextStep }) {
  const { planFeature, setPlanFeature } = useContext(AppContext);

  const priceDuration = `(${
    planFeature.duration === "Yearly" ? "per Year" : "per Month"
  })`;

  function handleChangeClick() {
    setPlanFeature((prevFeature) => {
      const planSequence = {
        Arcade: "Advanced",
        Advanced: "Pro",
        Pro: "Arcade",
      };
      const nextPlan = planSequence[prevFeature.selectedPlan] || "Arcade"; // Fallback to 'Arcade'
      return {
        ...prevFeature,
        selectedPlan: nextPlan,
      };
    });
  }
  


  let planPriceIdx;
  switch (planFeature.selectedPlan) {
    case "Arcade":
      planPriceIdx = 0;
      break;
    case "Advanced":
      planPriceIdx = 1;
      break;
    case "Pro":
      planPriceIdx = 2;
      break;
  }


  return (
    <section className={styles["finishing-upPage-wrapper"]}>
      <header>
        <h1>Finishing Up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </header>

      <ol>
        <li>
          <p>
            <span className={styles["selected-plan-text"]}>
              {planFeature.selectedPlan}({planFeature.duration})
            </span>
            <input type="button" value="Change" className={styles.changeBtn} onClick={handleChangeClick}/>
          </p>
          <span className={styles["selected-plan-price"]}>
            {planFeature.planPrice[planPriceIdx]}
          </span>
        </li>

        <div className={styles["horizontal-line"]}></div>

        {planFeature.addOns.map((addOn, uniqKey) => (
          <li key={uniqKey}>
            <span className={styles["add-ons-feature"]}>{addOn.service}</span>
            <span className={styles["add-ons-price"]}>
              {addOn.servicePrice}
            </span>
          </li>
        ))}
      </ol>

      <Total totalPriceDuration={priceDuration} />

      <div className={styles["button-wrapper"]}>
        <button className={styles["goBack-btn"]} onClick={finishingUpGoback}>
          Go Back
        </button>
        <button className={styles["confirm-btn"]} onClick={finishingUpNextStep}>
          Confirm
        </button>
      </div>
    </section>
  );
}
