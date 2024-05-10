import { useState } from "react";
function Input({ inputText, inputType, inputId, labelClass, placeHolderText }) {
  return (
    <>
      {" "}
      <label className={labelClass} htmlFor={inputId}>
        {" "}
        {inputText}{" "}
      </label>{" "}
      <input
        type={inputType}
        name={inputId}
        id={inputId}
        placeholder={placeHolderText}
        required
      />{" "}
    </>
  );
}
function SecondHeader({ headerName, headerClass }) {
  return (
    <div className="headerContainer">
      {" "}
      <h2 className={headerClass}>{headerName}</h2>{" "}
      <hr className="headerLine" />{" "}
    </div>
  );
}
function InputSubmit({ buttonText, className, onChangeFunction }) {
  return (
    <div className="submitButtonContainer">
      {" "}
      <input
        type="submit"
        value={buttonText}
        class={className}
        onClick={onChangeFunction}
      />{" "}
    </div>
  );
}

export default function TechnicalSkills() {
  const [inputValue, setInputValue] = useState([
    "Html",
    "Css",
    "Javascript",
    "React",
  ]);
  const [editState, setEditState] = useState([false]);
  const [renderCondition, setRenderCondition] = useState(5);

  const deleteByIndex = (index) => {
    setRenderCondition(0);
    setInputValue((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  console.log(renderCondition);
  if (inputValue.length >= renderCondition) {
    let skillContainer = document.querySelector(".skillContainer");
    skillContainer.innerHTML = "";
    for (let i = 0; i < inputValue.length; i++) {
      let newSkillItem = document.createElement("li");
      newSkillItem.className = "skillText";
      newSkillItem.innerText = inputValue[i];

      skillContainer.appendChild(newSkillItem);
    }
  }

  function handleInputValuechange(e) {
    e.preventDefault();
    let skillValue = document.querySelector("#userSkill");
    let skillValueArray = [skillValue.value];
    if (skillValue.value === "") {
      return;
    }

    if (editState[0] == true) {
      inputValue[editState[1]] = skillValue.value;
      handleEditState([false]);
      skillValue.placeholder = "Html";
      skillValue.value = "";
      return;
    }
    setInputValue(inputValue.concat(skillValueArray));
    setRenderCondition(0);
    skillValue.value = "";
  }

  function handleEditState(trueFalse) {
    setEditState(trueFalse);
  }

  function handleRenderState(newCondition) {
    setRenderCondition(newCondition);
  }

  document.addEventListener("click", function editInputValueItem(e) {
    const target = e.target.closest(".skillModifyIcon");
    if (target) {
      if (editState[0] === true) {
        return;
      }

      let skillIndex = target.getAttribute("dataset");
      let skillText = target.getAttribute("dataset-index");
      let skillInputField = document.querySelector("#userSkill");
      skillInputField.value = skillText;
      setRenderCondition(0);
      handleEditState([true, skillIndex]);
      document.removeEventListener("click", editInputValueItem);
    }
  });

  return (
    <>
      {" "}
      <SecondHeader
        headerName={"Technical Skills"}
        headerClass={"formHeader"}
      />{" "}
      <div className="skillDeleteEditContainer">
        {inputValue.map((inputText, index) => {
          return (
            <div class="skillModifyContainer" key={inputText}>
              <p class="skillModifyText">{inputText}</p>
              <div class="editDeleteContainer">
                <span
                  class="material-symbols-outlined skillModifyIcon"
                  dataset={index}
                  dataset-index={inputValue[index]}
                >
                  edit
                </span>
                <span
                  class="material-symbols-outlined skillDeleteIcon"
                  onClick={() => deleteByIndex(index)}
                >
                  delete
                </span>
              </div>
            </div>
          );
        })}
      </div>{" "}
      <Input
        inputText={"Add a skill"}
        inputType={"text"}
        inputId={"userSkill"}
        labelClass={"formLabel"}
        placeHolderText={"Html"}
      />{" "}
      <InputSubmit
        buttonText={"Submit technical skills"}
        className={"submitInput submitSkill"}
        onChangeFunction={handleInputValuechange}
      />{" "}
    </>
  );
}
