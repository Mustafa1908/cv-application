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

export default function ContactInfo() {
  return (
    <>
      <SecondHeader headerName={"Contact Info"} headerClass={"formHeader"} />
      <Input
        inputText={"Email"}
        inputType={"email"}
        inputId={"userEmail"}
        labelClass={"formLabel"}
      />
      <Input
        inputText={"Phone Number"}
        inputType={"tel"}
        inputId={"userPhoneNumber"}
        labelClass={"formLabel"}
      />
      <Input
        inputText={"Location"}
        inputType={"text"}
        inputId={"userLocation"}
        labelClass={"formLabel"}
      />
      <Input
        inputText={"Website"}
        inputType={"url"}
        inputId={"userWebsite"}
        labelClass={"formLabel"}
      />
    </>
  );
}
