import { useState } from "react";
import "../styles/Form.css";

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
        maxLength={maxCharacters}
        type={inputType}
        name={inputId}
        id={inputId}
        placeholder={placeHolderText}
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

export default function BasicInfo() {
  const [firstName, setFirstName] = useState("Mustafa");
  const [lastName, setLastName] = useState("Özkara");
  const [jobTitle, setJobTitle] = useState("Web Developer");
  const [shortIntroduction, setShortIntroduction] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque  error reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiiserror reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiiserror reiciendis"
  );

  let userFullName = document.querySelector(".userNameHeader");
  let userJobTitle = document.querySelector(".userJobHeader");
  let shortIntroductionText = document.querySelector(".presentationText");

  if (userFullName !== null) {
    userFullName.innerText = firstName + " " + lastName;
  }

  if (userJobTitle !== null) {
    userJobTitle.innerText = jobTitle;
  }

  if (shortIntroductionText !== null) {
    console.log(shortIntroduction);
    shortIntroductionText.innerText = shortIntroduction;
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleJobTitleChange(e) {
    setJobTitle(e.target.value);
  }

  function handleShortIntroductionChange(e) {
    setShortIntroduction(e.target.value);
  }

  return (
    <>
      <SecondHeader headerName={"Basic Info"} headerClass={"formHeader"} />
      <Input
        inputText={"First Name"}
        inputType={"text"}
        inputId={"firstName"}
        labelClass={"formLabel"}
        placeHolderText={"Mustafa"}
        currentValue={firstName}
        onChangeFunction={handleFirstNameChange}
        maxCharacters={22}
      />
      <Input
        inputText={"Last Name"}
        inputType={"text"}
        inputId={"secondName"}
        labelClass={"formLabel"}
        placeHolderText={"Özkara"}
        currentValue={lastName}
        onChangeFunction={handleLastNameChange}
        maxCharacters={22}
      />
      <Input
        inputText={"Professional Title"}
        inputType={"text"}
        inputId={"professionalTitle"}
        labelClass={"formLabel"}
        placeHolderText={"Web Developer"}
        currentValue={jobTitle}
        onChangeFunction={handleJobTitleChange}
        maxCharacters={22}
      />
      <textarea
        maxLength={566}
        placeholder="Write a short introduction about yourself"
        onChange={handleShortIntroductionChange}
      >
        {shortIntroduction}
      </textarea>
    </>
  );
}
