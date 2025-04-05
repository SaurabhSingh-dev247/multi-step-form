import { useContext } from "react";
import { AppContext } from "../../AppContext";
import styles from "./FinishingUp.module.css";

export default function Total({ totalPriceDuration }) {
  const { planFeature } = useContext(AppContext);

  let selectedPlanPrice;

  //Extracting the price value if the duration is mothly.
  if (planFeature.duration === "Monthly") {
    if (planFeature.selectedPlan === "Arcade") {
      selectedPlanPrice = parseInt(planFeature.planPrice[0].slice(1, 2));
    } else if (planFeature.selectedPlan === "Advanced") {
      selectedPlanPrice = parseInt(planFeature.planPrice[1].slice(1, 3));
    } else if (planFeature.selectedPlan === "Pro") {
      selectedPlanPrice = parseInt(planFeature.planPrice[2].slice(1, 3));
    }
  }

  //Extracting the price value if the duration is yearly.
  else if (planFeature.duration === "Yearly") {
    if (planFeature.selectedPlan === "Arcade") {
      selectedPlanPrice = parseInt(planFeature.planPrice[0].slice(1, 3));
    } else if (planFeature.selectedPlan === "Advanced") {
      selectedPlanPrice = parseInt(planFeature.planPrice[1].slice(1, 4));
    } else if (planFeature.selectedPlan === "Pro") {
      selectedPlanPrice = parseInt(planFeature.planPrice[2].slice(1, 4));
    }
  }

  //Here i am setting the add ons price value.
  function calculateTotal() {
    if (planFeature.addOns.length > 0 && planFeature.duration === "Monthly") {
      if (planFeature.addOns.length === 3) {
        return (
          selectedPlanPrice +
          parseInt(planFeature.addOns[0].servicePrice.slice(2, 3)) +
          parseInt(planFeature.addOns[1].servicePrice.slice(2, 3)) +
          parseInt(planFeature.addOns[2].servicePrice.slice(2, 3))
        );
      } else if (planFeature.addOns.length === 2) {
        return (
          selectedPlanPrice +
          parseInt(planFeature.addOns[0].servicePrice.slice(2, 3)) +
          parseInt(planFeature.addOns[1].servicePrice.slice(2, 3))
        );
      } else if (planFeature.addOns.length === 1) {
        return (
          selectedPlanPrice +
          parseInt(planFeature.addOns[0].servicePrice.slice(2, 3))
        );
      }
    }

    else if(planFeature.addOns.length > 0 && planFeature.duration === "Yearly"){
      if (planFeature.addOns.length === 3) {
        return (
          selectedPlanPrice +
          parseInt(planFeature.addOns[0].servicePrice.slice(2, 4)) +
          parseInt(planFeature.addOns[1].servicePrice.slice(2, 4)) +
          parseInt(planFeature.addOns[2].servicePrice.slice(2, 4))
        );
      } else if (planFeature.addOns.length === 2) {
        return (
          selectedPlanPrice +
          parseInt(planFeature.addOns[0].servicePrice.slice(2, 4)) +
          parseInt(planFeature.addOns[1].servicePrice.slice(2, 4))
        );
      } else if (planFeature.addOns.length === 1) {
        return (
          selectedPlanPrice +
          parseInt(planFeature.addOns[0].servicePrice.slice(2, 4))
        );
      }
    }
    return selectedPlanPrice;

  }

  const calculatedTotal = calculateTotal();

  return (
    <div className={styles["total-price-wrapper"]}>
      <span className={styles["total-text"]}>Total{totalPriceDuration}</span>
      <span className={styles["total-price"]}>
        +${calculatedTotal}/{planFeature.duration === "Monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
}
