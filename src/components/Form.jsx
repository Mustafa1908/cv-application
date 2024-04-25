import "../styles/Form.css";

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

function InputSubmit({ buttonText, className }) {
  return (
    <div className="submitButtonContainer">
      <input type="submit" value={buttonText} class={className} />
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

function SecondHeader({ headerName, headerClass }) {
  return (
    <div className="headerContainer">
      <h2 className={headerClass}>{headerName}</h2>
      <hr className="headerLine" />
    </div>
  );
}

export default function Form() {
  return (
    <>
      <main>
        <form>
          <SecondHeader headerName={"Basic Info"} headerClass={"formHeader"} />
          <Input
            inputText={"First Name"}
            inputType={"text"}
            inputId={"firstName"}
            labelClass={"formLabel"}
          />
          <Input
            inputText={"Last Name"}
            inputType={"text"}
            inputId={"secondName"}
            labelClass={"formLabel"}
          />
          <Input
            inputText={"Professional Title"}
            inputType={"text"}
            inputId={"professionalTitle"}
            labelClass={"formLabel"}
          />
          <textarea placeholder="Write a short introduction about yourself"></textarea>
          <SecondHeader
            headerName={"Contact Info"}
            headerClass={"formHeader"}
          />
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
        </form>
        <form>
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
        </form>
        <form>
          <SecondHeader
            headerName={"Work Experience"}
            headerClass={"formHeader"}
          />
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
          <Input
            inputText={"On-going"}
            inputType={"text"}
            inputId={"workOnGoing"}
            labelClass={"formLabel"}
          />
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
        </form>
        <form>
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
        </form>
      </main>
    </>
  );
}
