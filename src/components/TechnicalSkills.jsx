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

function InputSubmit({ buttonText, className }) {
  return (
    <div className="submitButtonContainer">
      <input type="submit" value={buttonText} class={className} />
    </div>
  );
}

export default function TechnicalSkills() {
  return (
    <>
      <SecondHeader
        headerName={"Technical Skills"}
        headerClass={"formHeader"}
      />
      <Input
        inputText={"Add a skill"}
        inputType={"text"}
        inputId={"userSkill"}
        labelClass={"formLabel"}
      />
      <InputSubmit
        buttonText={"Submit technical skills"}
        className={"submitInput"}
      />
    </>
  );
}
