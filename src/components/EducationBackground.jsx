function Input({ inputText, inputType, inputId, labelClass }) {
  return (
    <>
      <label className={labelClass} htmlFor={inputId}>
        {inputText}
      </label>
      <input type={inputType} name={inputId} id={inputId} />
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

function SlideInput() {
  return (
    <div class="slideInputContainer">
      <p className="slideInputText">On-going:</p>
      <label class="switch" for="slider">
        <input type="checkbox" id="slider" />
        <div class="slider round"></div>
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
      />
      <Input
        inputText={"Program/Degree/Course:"}
        inputType={"text"}
        inputId={"educationProgram"}
        labelClass={"formLabel"}
      />
      <Input
        inputText={"Starting Year:"}
        inputType={"date"}
        inputId={"educationStartingYear"}
        labelClass={"formLabel"}
      />
      <SlideInput />
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
