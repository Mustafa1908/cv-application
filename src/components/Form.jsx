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

function SubmitButton({ buttonText, className }) {
  return <button className={className}>{buttonText}</button>;
}

function Header({ headerName, headerClass }) {
  return (
    <>
      <h2 className={headerClass}>{headerName}</h2>
      <hr />
    </>
  );
}

export default function Form() {
  return (
    <>
      <main>
        <form>
          <Header headerName={"Basic Info"} headerClass={"formHeader"} />
          <Input
            inputText={"First Name"}
            inputType={"password"}
            inputId={"firstName"}
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
          <Input
            inputText={"Give a short description about yourself"}
            inputType={"text"}
            inputId={"shortDescription"}
            labelClass={"formLabel"}
          />
          <Header headerName={"Contact Info"} headerClass={"formHeader"} />
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
          <Header
            headerName={"Education Background"}
            headerClass={"formHeader"}
          />
          <Input
            inputText={"University/Institution/Organization:"}
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
          <Input
            inputText={"On-going:"}
            inputType={"checkbox"}
            inputId={"educationOnGoing"}
            labelClass={"formLabel"}
          />
          <Input
            inputText={"Graduating Year:"}
            inputType={"date"}
            inputId={"graduatingYear"}
            labelClass={"formLabel"}
          />
          <Input
            inputText={"Gpa (optional):"}
            inputType={"number"}
            inputId={"educationGpa"}
            labelClass={"formLabel"}
          />
          <Input
            inputText={"Additional info (ex. awards, courses, thesis project"}
            inputType={"text"}
            inputId={"additionalInfo"}
            labelClass={"formLabel"}
          />
          <SubmitButton
            buttonText={"Submit education background"}
            className={"submitInput"}
          />
        </form>
        <form>
          <Header headerName={"Work Experience"} headerClass={"formHeader"} />
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
          <Input
            inputText={"List your job responsibilities"}
            inputType={"text"}
            inputId={"additionalInfo"}
            labelClass={"formLabel"}
          />
          <SubmitButton
            buttonText={"Submit education background"}
            className={"submitInput"}
          />
        </form>
        <form>
          <Header headerName={"Technical Skills"} headerClass={"formHeader"} />
          <p className="formParagraph">
            Showcase the most relevant skills applicable to the job you are
            applying for
          </p>
          <Input
            inputText={"Add a skill category"}
            inputType={"text"}
            inputId={"userSkill"}
            labelClass={"formLabel"}
          />
          <SubmitButton
            buttonText={"Submit skills info"}
            className={"submitInput"}
          />
        </form>
      </main>
    </>
  );
}
