import { useContext } from "react";
import { AppContext } from "../../AppContext.jsx";
import Card from "./PlanCard.jsx";


import styles from "./PlanSelector.module.css";
import arcadeIcon from "../../assets/icon-arcade.svg";
import advancedIcon from "../../assets/icon-advanced.svg";
import proIcon from "../../assets/icon-pro.svg";


export default function PlanSelector({
  planSelectorGoBack,
  planSelectorNextStep,
  onCardSelect,
}) {
  const { planFeature, setPlanFeature } = useContext(AppContext);

  const activeClass = styles["active"];

  let priceKey = planFeature.duration.toLowerCase();

  const planPriceList = {
    monthly: ["$9/mo", "$12/mo", "$15/mo"],
    yearly: ["$90/yr", "$120/yr", "$150/yr"],
  };


  function onCardSelect(planValue) {
    setPlanFeature((prevState) => {
      const currentDurationKey = prevState.duration.toLowerCase(); // Use correct duration
      return {
        ...prevState,
        selectedPlan: planValue,
        planPrice: [...planPriceList[currentDurationKey]],
      };
    });
  }
  

  function onToggle() {
    setPlanFeature((prevState) => {
      return {
        ...prevState,
        planPrice:
          prevState.duration === "Monthly"
            ? [...planPriceList.yearly]
            : [...planPriceList.monthly],
        duration: prevState.duration === "Monthly" ? "Yearly" : "Monthly",
        addOns: []
      };
    });
  }

  return (
    <>
      <section className={styles["select-plan-wrapper"]}>
        <header>
          <h1>Select Your Plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </header>

        <div className={styles["cards-wrapper"]}>
          <Card
            src={arcadeIcon}
            cardDescription="Arcade"
            cardPrice={planPriceList[priceKey][0]}
            yearlySelected={planFeature.duration === "Yearly"}
            onClick={() => onCardSelect("Arcade")}
            isActive={planFeature.selectedPlan === "Arcade"}
          />
          <Card
            src={advancedIcon}
            cardDescription="Advanced"
            cardPrice={planPriceList[priceKey][1]}
            yearlySelected={planFeature.duration === "Yearly"}
            onClick={() => onCardSelect("Advanced")}
            isActive={planFeature.selectedPlan === "Advanced"}
          />
          <Card
            src={proIcon}
            cardDescription="Pro"
            cardPrice={planPriceList[priceKey][2]}
            yearlySelected={planFeature.duration === "Yearly"}
            onClick={() => onCardSelect("Pro")}
            isActive={planFeature.selectedPlan === "Pro"}
          />
        </div>

        <div className={styles["plan-selection-container"]}>
          <p
            className={`${styles.planText} ${
              planFeature.duration === "Monthly" ? activeClass : ""
            }`}
          >
            Monthly
          </p>
          <label
            role="button"
            id="toggle-bar"
            className={styles["toggle-container"]}
          >
            <input
              type="checkbox"
              id="toggle-bar"
              className={styles["toggle"]}
              onChange={onToggle}
              checked={planFeature.duration === "Yearly"}
            />
            <div className={styles["toggle-bar"]}>
              <div className={styles["toggle-circle"]}></div>
            </div>
          </label>
          <p
            className={`${styles.planText} ${
              planFeature.duration === "Yearly" ? activeClass : ""
            }`}
          >
            Yearly
          </p>
        </div>

        <div className={styles["button-wrapper"]}>
          <button className={styles["goBack-btn"]} onClick={planSelectorGoBack}>
            Go Back
          </button>
          <button
            className={styles["next-step-btn"]}
            onClick={planSelectorNextStep}
          >
            Next-Step
          </button>
        </div>
      </section>
    </>
  );
}
