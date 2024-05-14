import { useState } from "react";

function Input({
  inputText,
  inputType,
  inputId,
  placeHolderText,
  labelId,
  labelClass,
}) {
  return (
    <>
      <label className={labelClass} id={labelId} htmlFor={inputId}>
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
  const [educationArray, setEducationArray] = useState([
    [
      "University of London",
      "Ph.D in Philosophy",
      "Nov 2010",
      "Dec 2015",
      "2010-11",
      "2015-12",
    ],
  ]);
  const [educationEditText, setEducationEditText] = useState([
    ["University of London ", "Ph.D in Philosophy"],
  ]);
  const [editWorkState, setEditWorkState] = useState([false]);
  const [educationInputHide, setEducationInputHide] = useState(false);
  const [workRenderCondition, setWorkRenderCondition] = useState(2);

  console.log(educationArray);

  const deleteByIndex = (index) => {
    setWorkRenderCondition(0);
    let educationPlace = document.querySelector("#educationPlace");
    let educationProgram = document.querySelector("#educationProgram");

    educationPlace.value = "";
    educationProgram.value = "";

    setEducationArray((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });

    setEducationEditText((oldEditTextValue) => {
      return oldEditTextValue.filter((_, i) => i !== index);
    });
  };

  function editWorkArray(
    index,
    educationPlace,
    jobPlace,
    educationStartingYear,
    endYear,
    educationStartingYearNumber,
    endYearNumber
  ) {
    const newArray = [...educationArray];

    newArray[index][0] = educationPlace;
    newArray[index][1] = jobPlace;
    newArray[index][2] = educationStartingYear;
    newArray[index][3] = endYear;
    newArray[index][4] = educationStartingYearNumber;
    newArray[index][5] = endYearNumber;

    educationEditText[index][0] = educationPlace;
    educationEditText[index][1] = jobPlace;

    setEducationArray(newArray);
  }

  if (educationArray.length >= workRenderCondition) {
    let educationList = document.querySelector(".educationList");
    educationList.innerHTML = "";

    for (let i = 0; i < educationArray.length; i++) {
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

      jobPlaceJobText.innerText = educationArray[i][0];
      resultCompagnyText.innerText = educationArray[i][1];
      durationText.innerText =
        educationArray[i][2] + "-" + educationArray[i][3];

      if (educationArray[i][5] === "to today") {
        durationText.innerText =
          educationArray[i][2] + "-" + educationArray[i][5];
      }

      educationContainer.appendChild(jobPlaceJobText);
      educationContainer.appendChild(resultCompagnyText);
      listItemContainer.appendChild(educationContainer);
      listItemContainer.appendChild(durationText);
      educationList.appendChild(listItemContainer);
    }
  }

  function handleEducationValueChanges(e) {
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
    let educationPlace = document.querySelector("#educationPlace");
    let educationProgram = document.querySelector("#educationProgram");
    let educationStartingYear = document.querySelector(
      "#educationStartingYear"
    );
    let graduatingYear = document.querySelector("#graduatingYear");

    if (
      educationPlace.value === "" ||
      educationProgram.value === "" ||
      educationStartingYear.value === ""
    ) {
      return;
    }
    let formatedEducationStartingYear =
      monthNames[educationStartingYear.value.slice(6, 7) - 1] +
      " " +
      educationStartingYear.value.slice(0, 4);
    let formatedGraduatingYear =
      monthNames[graduatingYear.value.slice(6, 7) - 1] +
      " " +
      graduatingYear.value.slice(0, 4);

    if (educationStartingYear.value.slice(6, 7) >= 10) {
      formatedEducationStartingYear =
        monthNames[educationStartingYear.value.slice(5, 7) - 1] +
        " " +
        educationStartingYear.value.slice(0, 4);
    } else if (graduatingYear.value.slice(6, 7) >= 10) {
      formatedGraduatingYear =
        monthNames[graduatingYear.value.slice(5, 7) - 1] +
        " " +
        graduatingYear.value.slice(0, 4);
    }

    let graduatingYearValue = graduatingYear.value;
    console.log(graduatingYearValue.length);
    if (graduatingYearValue.length === 0) {
      graduatingYearValue = "to today";
    }

    let educationExperienceArray = [
      educationPlace.value + " ",
      educationProgram.value + " ",
      formatedEducationStartingYear,
      formatedGraduatingYear,
      educationStartingYear.value,
      graduatingYearValue,
    ];

    let educationEditTextArray = [
      [educationPlace.value + " ", educationProgram.value],
    ];

    if (editWorkState[0] == true) {
      editWorkArray(
        editWorkState[1],
        educationPlace.value,
        educationProgram.value,
        formatedEducationStartingYear,
        formatedGraduatingYear,
        educationStartingYear.value,
        graduatingYear.value
      );

      handleEditWorkState([false]);
      let skillInput = document.querySelector("#userSkill");
      skillInput.value = "";
      educationPlace.value = "";
      educationProgram.value = "";
      return;
    }

    setEducationArray((educationArray) => [
      ...educationArray,
      educationExperienceArray,
    ]);
    setEducationEditText((educationEditText) => [
      ...educationEditText,
      educationEditTextArray,
    ]);
    educationPlace.value = "";
    educationProgram.value = "";
    educationStartingYear.value = "";
    graduatingYear.value = "";
  }

  document.addEventListener("click", function hideGraduatingYearInput(e) {
    const target = e.target.closest(".educationSlider");
    let graduatingYearInput = document.querySelector("#graduatingYear");
    let graduatingYearLabel = document.querySelector(
      ".educationGraduatingLabel"
    );

    if (target) {
      if (educationInputHide === false) {
        graduatingYearInput.className = "workNone";
        graduatingYearLabel.innerText = "";

        setEducationInputHide(true);
        document.removeEventListener("click", hideGraduatingYearInput);
      } else {
        graduatingYearInput.className = "";
        graduatingYearLabel.innerText = "Graduating Year";
        setEducationInputHide(false);
        document.removeEventListener("click", hideGraduatingYearInput);
      }
    }
  });

  function handleEditWorkState(trueFalse) {
    setEditWorkState(trueFalse);
  }

  document.addEventListener("click", function editeducationArrayItem(e) {
    const target = e.target.closest(".skillModifyIcon");
    if (target) {
      if (editWorkState[0] === true) {
        return;
      }

      let educationIndex = target.getAttribute("dataset");
      let educationPlace = document.querySelector("#educationPlace");
      let educationProgram = document.querySelector("#educationProgram");
      let educationStartingYear = document.querySelector(
        "#educationStartingYear"
      );
      let graduatingYear = document.querySelector("#graduatingYear");

      educationPlace.value = educationArray[educationIndex][0];
      educationProgram.value = educationArray[educationIndex][1];
      educationStartingYear.value = educationArray[educationIndex][4];
      graduatingYear.value = educationArray[educationIndex][5];

      let skillInput = document.querySelector("#userSkill");
      skillInput.value = "";

      setWorkRenderCondition(0);
      handleEditWorkState([true, educationIndex]);
      document.removeEventListener("click", editeducationArrayItem);
    }
  });

  return (
    <>
      <SecondHeader
        headerName={"Education Background"}
        headerClass={"formHeader"}
      />
      <div className="skillDeleteEditContainer">
        {educationEditText.map((educationText, index) => {
          return (
            <div class="skillModifyContainer" key={educationText}>
              <p class="skillModifyText">{educationText}</p>
              <div class="editDeleteContainer">
                <span
                  class="material-symbols-outlined skillModifyIcon"
                  dataset={index}
                  dataset-index={educationArray[index]}
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
        inputText={"University/Institution:"}
        inputType={"text"}
        inputId={"educationPlace"}
        labelClass={"formLabel"}
        placeHolderText={"University of London"}
        labelId={"formLabel"}
      />
      <Input
        inputText={"Program/Degree/Course:"}
        inputType={"text"}
        inputId={"educationProgram"}
        labelClass={"formLabel"}
        placeHolderText={"Ph.D in Philosophy"}
        labelId={"formLabel"}
      />
      <Input
        inputText={"Starting Year:"}
        inputType={"month"}
        inputId={"educationStartingYear"}
        labelClass={"formLabel"}
        labelId={"formLabel"}
      />
      <SlideInput slideId={"educationSlider"} />
      <Input
        inputText={"Graduating Year:"}
        inputType={"month"}
        inputId={"graduatingYear"}
        labelClass={"educationGraduatingLabel"}
        labelId={"formLabel"}
      />
      <InputSubmit
        buttonText={"Submit education background"}
        className={"submitInput submitEducation"}
        onChangeFunction={handleEducationValueChanges}
      />
    </>
  );
}
