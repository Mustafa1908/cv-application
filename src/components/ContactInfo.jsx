import { useState } from "react";

function Input({
  inputText,
  inputType,
  inputId,
  placeHolderText,
  labelClass,
  currentValue,
  onChangeFunction,
  maxCharacters,
}) {
  return (
    <>
      <label className={labelClass} htmlFor={inputId}>
        {inputText}
      </label>
      <input
        type={inputType}
        name={inputId}
        id={inputId}
        placeholder={placeHolderText}
        maxLength={maxCharacters}
        value={currentValue}
        onChange={onChangeFunction}
      />
    </>
  );
}

function SecondHeader({ headerName, headerClass }) {
  return (
    <div className="headerContainer">
      <h2 className={headerClass}>{headerName}</h2>
      <hr className="headerLine" />
    </div>
  );
}

export default function ContactInfo() {
  const [cvMail, setCvMail] = useState("mustafaexample@mail.com");
  const [cvPhoneNumber, setCvPhoneNumber] = useState("0486 93 41 32");
  const [cvLocation, setCvLocation] = useState("Belgium, Brussels");
  const [cvWebsite, setCvWebsite] = useState(
    "https://linkedin/mustafaozkara.com"
  );

  let cvMailText = document.querySelector(".cvMail");
  let cvMailPhoneNumber = document.querySelector(".cvPhoneNumber");
  let cvLocationText = document.querySelector(".cvLocation");
  let cvWebsiteText = document.querySelector(".cvWebsite");

  if (cvMailText !== null) {
    cvMailText.innerText = cvMail;
  }

  if (cvMailPhoneNumber !== null) {
    cvMailPhoneNumber.innerText = cvPhoneNumber;
  }

  if (cvLocationText !== null) {
    cvLocationText.innerText = cvLocation;
  }

  if (cvWebsiteText !== null) {
    cvWebsiteText.innerText = cvWebsite;
  }

  function handleCvMailChange(e) {
    setCvMail(e.target.value);
  }

  function handleCvPhoneNumberChange(e) {
    setCvPhoneNumber(e.target.value);
  }

  function handleCvLocationChange(e) {
    setCvLocation(e.target.value);
  }

  function handleCvWebsiteChange(e) {
    setCvWebsite(e.target.value);
  }

  return (
    <>
      <SecondHeader headerName={"Contact Info"} headerClass={"formHeader"} />
      <Input
        inputText={"Email"}
        inputType={"email"}
        inputId={"userEmail"}
        labelClass={"formLabel"}
        placeHolderText={"mustafaexample@mail.com"}
        currentValue={cvMail}
        onChangeFunction={handleCvMailChange}
        maxCharacters={58}
      />
      <Input
        inputText={"Phone Number"}
        inputType={"tel"}
        inputId={"userPhoneNumber"}
        labelClass={"formLabel"}
        placeHolderText={"0486 93 41 32"}
        currentValue={cvPhoneNumber}
        onChangeFunction={handleCvPhoneNumberChange}
        maxCharacters={20}
      />
      <Input
        inputText={"Location"}
        inputType={"text"}
        inputId={"userLocation"}
        labelClass={"formLabel"}
        placeHolderText={"Belgium, Brussels"}
        currentValue={cvLocation}
        onChangeFunction={handleCvLocationChange}
        maxCharacters={35}
      />
      <Input
        inputText={"Website"}
        inputType={"url"}
        inputId={"userWebsite"}
        labelClass={"formLabel"}
        placeHolderText={"https://linkedin/mustafaozkara.com"}
        currentValue={cvWebsite}
        onChangeFunction={handleCvWebsiteChange}
        maxCharacters={58}
      />
    </>
  );
}
