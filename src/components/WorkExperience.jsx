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

export default function WorkExperience() {
  return (
    <>
      <SecondHeader headerName={"Work Experience"} headerClass={"formHeader"} />
      <Input
        inputText={"Title/Position:"}
        inputType={"text"}
        inputId={"jobName"}
        labelClass={"formLabel"}
      />
      <Input
        inputText={"Workplace/Company/Organization:"}
        inputType={"text"}
        inputId={"placeOfWork"}
        labelClass={"formLabel"}
      />
      <Input
        inputText={"Starting Year:"}
        inputType={"date"}
        inputId={"startingYear"}
        labelClass={"formLabel"}
      />
      <SlideInput />
      <Input
        inputText={"End Year:"}
        inputType={"date"}
        inputId={"workEndYear"}
        labelClass={"formLabel"}
      />
      <InputSubmit
        buttonText={"Submit education background"}
        className={"submitInput"}
      />
    </>
  );
}
