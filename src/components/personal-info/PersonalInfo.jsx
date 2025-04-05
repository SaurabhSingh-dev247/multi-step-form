import { useEffect, useState } from "react";
import Label from "./Label.jsx";

export default function PersonalInfo({ onPerSonalInfoSelect, check }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    isNextStepClicked: false,
  });

  function isValidEmail(emailStr) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailStr);
  }

  function handleNameChange(event) {
    setValue((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  }
  function handleEmailChange(event) {
    setValue((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  }
  function handlePhoneNumberChange(event) {
    setValue((prevState) => {
      return {
        ...prevState,
        phoneNumber: event.target.value,
      };
    });
  }

  function handleNextStep() {
    if (
      value.name.trim() !== "" &&
      value.phoneNumber.trim() !== "" &&
      isValidEmail(value.email)
    ) {
      onPerSonalInfoSelect();
    } else {
      setValue((prevState) => {
        return {
          ...prevState,
          isNextStepClicked: true,
        };
      });
    }
  }

  return (
    <div className="personal-info">
      <header>
        <h1>Personal info.</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </header>

      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <Label
          labelName="Name"
          labelType="text"
          inputPlaceHolder="e.g. Stephen King"
          inputValue={value.name}
          isInputEmpty={value.name.trim() === "" && value.isNextStepClicked}
          onChange={handleNameChange}
        />
        <Label
          labelName="Email Address"
          labelType="email"
          inputPlaceHolder="e.g. stephenking@lorem.com"
          inputValue={value.email}
          isEmailInvalid={
            !isValidEmail(value.email) &&
            value.email.trim() !== "" &&
            value.isNextStepClicked
          }
          isInputEmpty={value.email === "" && value.isNextStepClicked}
          onChange={handleEmailChange}
        />
        <Label
          labelName="Phone Number"
          labelType="number"
          inputPlaceHolder="e.g. +1 234 567 890"
          inputValue={value.phoneNumber}
          isInputEmpty={
            value.phoneNumber.trim() === "" && value.isNextStepClicked
          }
          onChange={handlePhoneNumberChange}
        />
      </form>
      <div className="button-wrapper">
        <button className="next-step-btn" onClick={handleNextStep}>
          Next-Step
        </button>
      </div>
    </div>
  );
}
