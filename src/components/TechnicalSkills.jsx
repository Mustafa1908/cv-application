import { useState } from "react";

function Input({ inputText, inputType, inputId, labelClass, placeHolderText }) {
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
        required
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

function SimpleListItem({ listItemText, listItemClass }) {
  return <li className={listItemClass}>{listItemText}</li>;
}

function InputSubmit({ buttonText, className, onChangeFunction }) {
  return (
    <div className="submitButtonContainer">
      <input
        type="submit"
        value={buttonText}
        class={className}
        onClick={onChangeFunction}
      />
    </div>
  );
}

function EditDeleteItem({
  itemContainerClass,
  itemText,
  itemTextClass,
  iconsContainerClass,
  editiconClass,
  deleteIconClass,
}) {
  return (
    <div className={itemContainerClass}>
      <p className={itemTextClass}>{itemText}</p>
      <div className={iconsContainerClass}>
        <span class={"material-symbols-outlined " + editiconClass}>delete</span>
        <span class={"material-symbols-outlined " + deleteIconClass}>edit</span>
      </div>
    </div>
  );
}

export default function TechnicalSkills() {
  const [inputValue, setInputValue] = useState([]);

  if (inputValue.length >= 1) {
    let skillDeleteEditContainer = document.querySelector(
      ".skillDeleteEditContainer"
    );
    let skillContainer = document.querySelector(".skillContainer");

    skillContainer.innerHTML = "";
    skillDeleteEditContainer.innerHTML = "";

    for (let i = 0; i < inputValue.length; i++) {
      let newSkillItem = document.createElement("li");
      let editDeleteItem = document.createElement("div");

      editDeleteItem.className = "skillModifyContainer";
      editDeleteItem.innerHTML = `<p class="skillModifyText">${inputValue[i]}</p><div class="editDeleteContainer"><span class="material-symbols-outlined skillModifyIcon">delete</span><span class="material-symbols-outlined skillDeleteIcon">edit</span></div>`;

      newSkillItem.className = "skillText";
      newSkillItem.innerText = inputValue[i];

      skillDeleteEditContainer.appendChild(editDeleteItem);
      skillContainer.appendChild(newSkillItem);
    }
  }

  function handleInputValuechange(e) {
    e.preventDefault();

    let skillValue = document.querySelector("#userSkill");

    let skillValueArray = [skillValue.value];
    setInputValue(inputValue.concat(skillValueArray));
    skillValue.value = "";
  }

  return (
    <>
      <SecondHeader
        headerName={"Technical Skills"}
        headerClass={"formHeader"}
      />
      <div className="skillDeleteEditContainer">
        <EditDeleteItem
          itemContainerClass={"skillModifyContainer"}
          itemText={"Html"}
          itemTextClass={"skillModifyText"}
          iconsContainerClass={"editDeleteContainer"}
          editiconClass={"skillModifyIcon"}
          deleteIconClass={"skillDeleteIcon"}
        />
      </div>
      <Input
        inputText={"Add a skill"}
        inputType={"text"}
        inputId={"userSkill"}
        labelClass={"formLabel"}
        placeHolderText={"Html"}
      />
      <InputSubmit
        buttonText={"Submit technical skills"}
        className={"submitInput submitSkill"}
        onChangeFunction={handleInputValuechange}
      />
    </>
  );
}
