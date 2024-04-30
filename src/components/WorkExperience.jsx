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

export default function WorkExperience() {
  return (
    <>
      <SecondHeader headerName={"Work Experience"} headerClass={"formHeader"} />
      <Input
        inputText={"Title/Position:"}
        inputType={"text"}
        inputId={"jobName"}
        labelClass={"formLabel"}
        placeHolderText={"Business Analyst"}
      />
      <Input
        inputText={"Workplace/Company/Organization:"}
        inputType={"text"}
        inputId={"placeOfWork"}
        labelClass={"formLabel"}
        placeHolderText={"Company Inc."}
      />
      <Input
        inputText={"Starting Year:"}
        inputType={"date"}
        inputId={"startingYear"}
        labelClass={"formLabel"}
      />
      <SlideInput slideId={"workSlider"} />
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
