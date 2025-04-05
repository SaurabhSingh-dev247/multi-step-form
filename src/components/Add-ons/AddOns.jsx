import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { List } from "./List";
import styles from "./AddOns.module.css";

export default function AddOns({ addOnsNextStepClick, addOnsGoBackClick }) {

  const { planFeature, setPlanFeature } = useContext(AppContext);
  let service1price;
  let service2price;
  if (planFeature.duration === "Yearly") {
   service1price = "+$10/yr";
   service2price = "+$20/yr";
  } 
  else if(planFeature.duration === "Monthly"){
    service1price = "+$1/mo";
    service2price = "+$2/mo";
  }

  function handleChange(addOnService, addOnPrice) {
    setPlanFeature((prevFeature) => {
      const newObj = { service: addOnService, servicePrice: addOnPrice };
  
      const exist = prevFeature.addOns.some(
        (addOn) => addOn.service === addOnService
      );
  
      if (exist) {
        // Remove if already selected (toggle off)
        return {
          ...prevFeature,
          addOns: prevFeature.addOns.filter(
            (addOn) => addOn.service !== addOnService
          ),
        };
      }
  
      // Add if not already selected
      return {
        ...prevFeature,
        addOns: [...prevFeature.addOns, newObj],
      };
    });
  }
  

  return (
    <div className={styles.addOnContainer}>
      <header>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>
      <ul className={styles.listWrapper}>
        <List
          listAbout="Online Service"
          listDescription="Access to multiplayer games"
          price={service1price}
          uniqueId="checkBox1"
          isSelected={planFeature.addOns.some(
            (addOn) => addOn.service === "Online Service"
          )}
          changeHandler={()=> handleChange("Online Service",service1price)}
        />
        <List
          listAbout="Larger Storage"
          listDescription="Extra 1TB of cloud save"
          price={service2price}
          uniqueId="checkBox2"
          isSelected={planFeature.addOns.some(
            (addOn) => addOn.service === "Larger Storage"
          )}
          changeHandler={()=> handleChange("Larger Storage",service2price)}
        />
        <List
          listAbout="Customizable Profile"
          listDescription="Custom theme on your profile"
          price={service2price}
          uniqueId="checkBox3"
          isSelected={planFeature.addOns.some(
            (addOn) => addOn.service === "Customizable Profile"
          )}
          changeHandler={()=> handleChange("Customizable Profile",service2price)}
        />
        <div className={styles.buttonWrapper}>
          <button className={styles["goBack-btn"]} onClick={addOnsGoBackClick}>
            Go Back
          </button>
          <button
            className={styles["next-step-btn"]}
            onClick={addOnsNextStepClick}
          >
            Next-Step
          </button>
        </div>
      </ul>
    </div>
  );

}