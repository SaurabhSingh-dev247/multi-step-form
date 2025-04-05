import "./App.css";
import thankYouImage from "./assets/icon-thank-you.svg"
import PersonalInfo from "./components/personal-info/PersonalInfo";
import SideBar from "./components/SideBar/SideBar";
import PlanSelector from "./components/plan-selector/PlanSelector";
import AddOns from "./components/Add-ons/AddOns";
import FinishingUp from "./components/Finishing-up/FinishingUp";
import ThankYou from "./components/ThankYou.jsx";

import { AppContext } from "./AppContext.jsx";
import { useState } from "react";

function App() {
  const [planFeature, setPlanFeature] = useState({
    selectedPlan: "",
    planPrice: [],
    addOns: [],
    duration: "Monthly",
  });

  const [personalInfoClick, setPersonInfoClick] = useState(false);

  const [planSelectorClick, setPlanSelectorClick] = useState({
    nextStep: false,
    goBack: false,
  });

  const [addOnsClick, setAddOnsClick] = useState({
    nextStep: false,
    goBack: false,
  });

  const [finishingUpClick, setFinishingUpClick] = useState({
    nextStep: false,
    goBack: false,
  });

  function handlePersonaInfoSelect() {
    setPersonInfoClick(true);
    setPlanSelectorClick((prevState) => ({
      ...prevState,
      goBack: false, // Reset goBack when moving forward
    }));
  }

  function handlePlanSelectorNextStep() {
    if(planFeature.selectedPlan !== ""){

      setPlanSelectorClick((prevState) => ({
        ...prevState,
        nextStep: true,
      }));
    }else{
      alert("First select a plan and then proceed.");
    }
      
  }

  function handlePlanSelectorGoBack() {
    setPlanSelectorClick((prevState) => ({
      ...prevState,
      goBack: true,
    }));

    setPersonInfoClick(false);
  }

  function handleAddOnsNextStepClick() {
    setAddOnsClick((prevState) => ({
      ...prevState,
      nextStep: true,
    }));
  }

  function handleAddOnsGoBackClick() {
    setAddOnsClick((prevState) => ({
      ...prevState,
      goBack: true,
    }));

    setPlanSelectorClick((prevState) => ({
      ...prevState,
      nextStep: false,
    }));
  }

  function handleFinishingUpNextStep() {
    setFinishingUpClick((prevState) => ({
      ...prevState,
      nextStep: true,
    }));
  }

  function handleFinishingUpGoBack() {
    setFinishingUpClick((prevState) => ({
      ...prevState,
      goBack: true,
    }));

    setAddOnsClick((prevState) => ({
      ...prevState,
      nextStep: false,
    }));
  }

  let content = <PersonalInfo onPerSonalInfoSelect={handlePersonaInfoSelect} />;

  if (planSelectorClick.goBack) {
    content = <PersonalInfo onPerSonalInfoSelect={handlePersonaInfoSelect} />;
  } else if (personalInfoClick && !planSelectorClick.nextStep) {
    content = (
      <PlanSelector
        planSelectorGoBack={handlePlanSelectorGoBack}
        planSelectorNextStep={handlePlanSelectorNextStep}
      />
    );
  } else if (planSelectorClick.nextStep && !addOnsClick.nextStep) {
    content = (
      <AddOns
        addOnsNextStepClick={handleAddOnsNextStepClick}
        addOnsGoBackClick={handleAddOnsGoBackClick}
      />
    );
  } else if (addOnsClick.nextStep && !finishingUpClick.nextStep) {
    content = (
      <FinishingUp
        finishingUpGoback={handleFinishingUpGoBack}
        finishingUpNextStep={handleFinishingUpNextStep}
      />
    );
  } else if(finishingUpClick.nextStep){
    content = <ThankYou image={thankYouImage}/>
  }

  return (
    <AppContext.Provider value={{ planFeature, setPlanFeature }}>
     
      <section className="dynamic-sidebar">
        <SideBar
          stepNumber="1"
          stepDescription="YOUR INFO"
          isActive={personalInfoClick === false}
        />
        <SideBar
          stepNumber="2"
          stepDescription="SELECT PLAN"
          isActive={
            personalInfoClick === true && planSelectorClick.nextStep === false
          }
        />
        <SideBar
          stepNumber="3"
          stepDescription="ADD-ONS"
          isActive={
            planSelectorClick.nextStep === true &&
            addOnsClick.nextStep === false
          }
        />
        <SideBar
          stepNumber="4"
          stepDescription="SUMMARY"
          isActive={
            addOnsClick.nextStep === true 
          }
        />
      </section>
      <main className="main-content-wrapper">{content}</main>
    </AppContext.Provider>
  );
}

export default App;
