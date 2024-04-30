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

export default function BasicInfo() {
  return (
    <>
      <SecondHeader headerName={"Basic Info"} headerClass={"formHeader"} />
      <Input
        inputText={"First Name"}
        inputType={"text"}
        inputId={"firstName"}
        labelClass={"formLabel"}
        placeHolderText={"Mustafa"}
      />
      <Input
        inputText={"Last Name"}
        inputType={"text"}
        inputId={"secondName"}
        labelClass={"formLabel"}
        placeHolderText={"Özkara"}
      />
      <Input
        inputText={"Professional Title"}
        inputType={"text"}
        inputId={"professionalTitle"}
        labelClass={"formLabel"}
        placeHolderText={"Web Developer"}
      />
      <textarea placeholder="Write a short introduction about yourself"></textarea>
    </>
  );
}
