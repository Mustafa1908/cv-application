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

function InputSubmit({ buttonText, className }) {
  return (
    <div className="submitButtonContainer">
      <input type="submit" value={buttonText} class={className} />
    </div>
  );
}

export default function EducationBackground() {
  return (
    <>
      <SecondHeader
        headerName={"Education Background"}
        headerClass={"formHeader"}
      />
      <Input
        inputText={"University/Institution:"}
        inputType={"text"}
        inputId={"educationPlace"}
        labelClass={"formLabel"}
        placeHolderText={"University of London"}
      />
      <Input
        inputText={"Program/Degree/Course:"}
        inputType={"text"}
        inputId={"educationProgram"}
        labelClass={"formLabel"}
        placeHolderText={"Ph.D in Philosophy"}
      />
      <Input
        inputText={"Starting Year:"}
        inputType={"date"}
        inputId={"educationStartingYear"}
        labelClass={"formLabel"}
      />
      <SlideInput slideId={"educationSlider"} />
      <Input
        inputText={"Graduating Year:"}
        inputType={"date"}
        inputId={"graduatingYear"}
        labelClass={"formLabel"}
      />
      <InputSubmit
        buttonText={"Submit education background"}
        className={"submitInput"}
      />
    </>
  );
}
