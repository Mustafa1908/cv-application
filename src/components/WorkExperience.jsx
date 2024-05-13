import { useState } from "react";

function Input({ inputText, inputType, inputId, labelId, placeHolderText }) {
  return (
    <>
      <label id={labelId} htmlFor={inputId}>
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

function SlideInput({ slideId }) {
  return (
    <div class="slideInputContainer">
      <p className="slideInputText">On-going:</p>
      <label class="switch" for={slideId}>
        <input type="checkbox" id={slideId} />
        <div class={slideId + " round"}></div>
      </label>
    </div>
  );
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

export default function WorkExperience() {
  const [workValue, setWorkValue] = useState([
    [
      "Business Analyst",
      "Company Inc.",
      "Oct 2010",
      "Jan 2015",
      "2010-10",
      "2015-01",
    ],
  ]);

  const [editText, setEditText] = useState([
    ["Business Analyst ", "Company Inc."],
  ]);
  const [editWorkState, setEditWorkState] = useState([false]);
  const [inputHide, setInputHide] = useState(false);
  const [workRenderCondition, setWorkRenderCondition] = useState(2);

  const deleteByIndex = (index) => {
    setWorkRenderCondition(0);
    let positionName = document.querySelector("#jobName");
    let placeOfWork = document.querySelector("#placeOfWork");

    positionName.value = "";
    placeOfWork.value = "";

    setWorkValue((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });

    setEditText((oldEditTextValue) => {
      return oldEditTextValue.filter((_, i) => i !== index);
    });
  };

  function editWorkArray(
    index,
    positionName,
    jobPlace,
    startingYear,
    endYear,
    startingYearNumber,
    endYearNumber
  ) {
    const newArray = [...workValue];

    newArray[index][0] = positionName;
    newArray[index][1] = jobPlace;
    newArray[index][2] = startingYear;
    newArray[index][3] = endYear;
    newArray[index][4] = startingYearNumber;
    newArray[index][5] = endYearNumber;

    editText[index][0] = positionName;
    editText[index][1] = jobPlace;

    setWorkValue(newArray);
  }

  if (workValue.length >= workRenderCondition) {
    let workContainer = document.querySelector(".workExperienceList");
    workContainer.innerHTML = "";

    for (let i = 0; i < workValue.length; i++) {
      let listItemContainer = document.createElement("div");
      let educationContainer = document.createElement("div");
      let jobPlaceJobText = document.createElement("li");
      let resultCompagnyText = document.createElement("span");
      let durationText = document.createElement("p");

      listItemContainer.className = "listItemContainer";
      educationContainer.className = "educationContainer";
      jobPlaceJobText.className = "jobPlaceJobText";
      resultCompagnyText.className = "resultCompagnyText";
      durationText.className = "durationText";

      jobPlaceJobText.innerText = workValue[i][0];
      resultCompagnyText.innerText = workValue[i][1];
      durationText.innerText = workValue[i][2] + "-" + workValue[i][3];

      if (workValue[i][5] === "to today") {
        durationText.innerText = workValue[i][2] + "-" + workValue[i][5];
      }

      educationContainer.appendChild(jobPlaceJobText);
      educationContainer.appendChild(resultCompagnyText);
      listItemContainer.appendChild(educationContainer);
      listItemContainer.appendChild(durationText);
      workContainer.appendChild(listItemContainer);
    }
  }

  function handleInputValuechange(e) {
    e.preventDefault();
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Dec",
    ];
    let positionName = document.querySelector("#jobName");
    let placeOfWork = document.querySelector("#placeOfWork");
    let startingYear = document.querySelector("#startingYear");
    let workEndYear = document.querySelector("#workEndYear");

    if (
      positionName.value === "" ||
      placeOfWork.value === "" ||
      startingYear.value === ""
    ) {
      return;
    }
    let formatedStartingYear =
      monthNames[startingYear.value.slice(6, 7) - 1] +
      " " +
      startingYear.value.slice(0, 4);
    let formatedEndYear =
      monthNames[workEndYear.value.slice(6, 7) - 1] +
      " " +
      workEndYear.value.slice(0, 4);

    if (startingYear.value.slice(6, 7) >= 10) {
      formatedStartingYear =
        monthNames[startingYear.value.slice(5, 7) - 1] +
        " " +
        startingYear.value.slice(0, 4);
    } else if (workEndYear.value.slice(6, 7) >= 10) {
      formatedEndYear =
        monthNames[workEndYear.value.slice(5, 7) - 1] +
        " " +
        workEndYear.value.slice(0, 4);
    }

    let workEndYearValue = workEndYear.value;
    if (workEndYearValue.length === 0) {
      console.log("hey");
      workEndYearValue = "to today";
    }

    let workExperienceArray = [
      positionName.value + " ",
      placeOfWork.value + " ",
      formatedStartingYear,
      formatedEndYear,
      startingYear.value,
      workEndYearValue,
    ];

    let editTextArray = [[positionName.value + " ", placeOfWork.value]];

    if (editWorkState[0] == true) {
      editWorkArray(
        editWorkState[1],
        positionName.value,
        placeOfWork.value,
        formatedStartingYear,
        formatedEndYear,
        startingYear.value,
        workEndYear.value
      );

      handleEditWorkState([false]);
      let skillInput = document.querySelector("#userSkill");
      skillInput.value = "";
      positionName.value = "";
      placeOfWork.value = "";
      return;
    }

    setWorkValue((workValue) => [...workValue, workExperienceArray]);
    setEditText((editText) => [...editText, editTextArray]);
    positionName.value = "";
    placeOfWork.value = "";
    startingYear.value = "";
    workEndYear.value = "";
  }

  document.addEventListener("click", function hideEndYearInput(e) {
    const target = e.target.closest("#workSlider");
    let endYearInput = document.querySelector("#workEndYear");
    let endYearLabel = document.querySelector("#formLabel");

    if (target) {
      if (inputHide === false) {
        endYearInput.className = "workNone";
        endYearLabel.className = "workNone";

        setInputHide(true);
        document.removeEventListener("click", hideEndYearInput);
      } else {
        endYearInput.className = "";
        endYearLabel.className = "";

        setInputHide(false);
        document.removeEventListener("click", hideEndYearInput);
      }
    }
  });

  function handleEditWorkState(trueFalse) {
    setEditWorkState(trueFalse);
  }

  document.addEventListener("click", function editWorkValueItem(e) {
    const target = e.target.closest(".skillModifyIcon");
    if (target) {
      if (editWorkState[0] === true) {
        return;
      }

      let workIndex = target.getAttribute("dataset");
      let positionName = document.querySelector("#jobName");
      let placeOfWork = document.querySelector("#placeOfWork");
      let startingYear = document.querySelector("#startingYear");
      let workEndYear = document.querySelector("#workEndYear");

      positionName.value = workValue[workIndex][0];
      placeOfWork.value = workValue[workIndex][1];
      startingYear.value = workValue[workIndex][4];
      workEndYear.value = workValue[workIndex][5];

      let skillInput = document.querySelector("#userSkill");
      skillInput.value = "";

      setWorkRenderCondition(0);
      handleEditWorkState([true, workIndex]);
      document.removeEventListener("click", editWorkValueItem);
    }
  });

  return (
    <>
      <SecondHeader headerName={"Work Experience"} headerClass={"formHeader"} />
      <div className="skillDeleteEditContainer">
        {editText.map((editValue, index) => {
          return (
            <div class="skillModifyContainer" key={editValue}>
              <p class="skillModifyText">{editValue}</p>
              <div class="editDeleteContainer">
                <span
                  class="material-symbols-outlined skillModifyIcon"
                  dataset={index}
                  dataset-index={workValue[index]}
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
      </div>
      <Input
        inputText={"Title/Position:"}
        inputType={"text"}
        inputId={"jobName"}
        labelId={"formLabel"}
        placeHolderText={"Business Analyst"}
      />
      <Input
        inputText={"Workplace/Company/Organization:"}
        inputType={"text"}
        inputId={"placeOfWork"}
        labelId={"formLabel"}
        placeHolderText={"Company Inc."}
      />
      <Input
        inputText={"Starting Year:"}
        inputType={"month"}
        inputId={"startingYear"}
        labelId={"formLabel"}
        placeHolderText={"2024-05"}
      />
      <SlideInput slideId={"workSlider"} />
      <Input
        inputText={"End Year:"}
        inputType={"month"}
        inputId={"workEndYear"}
        labelId={"formLabel"}
      />
      <InputSubmit
        buttonText={"Submit education background"}
        className={"submitInput submitWorkExperience"}
        onChangeFunction={handleInputValuechange}
      />
    </>
  );
}
