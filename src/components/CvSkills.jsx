function ThirdHeaderHr({ headerName, headerClass, hrClassName }) {
  return (
    <div className="headerContainer">
      <h3 className={headerClass}>{headerName}</h3>
      <hr className={hrClassName} />
    </div>
  );
}

function SimpleListItem({ listItemText, listItemClass }) {
  return <li className={listItemClass}>{listItemText}</li>;
}

export default function CvSkills() {
  return (
    <>
      <ThirdHeaderHr
        headerName={"TECHNICAL SKILLS"}
        headerClass={"cvHeader"}
        hrClassName={"skillHeaderLine"}
      />
      <ul className="skillContainer">
        <SimpleListItem listItemText={"Html"} listItemClass={"skillText"} />
        <SimpleListItem listItemText={"Css"} listItemClass={"skillText"} />
        <SimpleListItem
          listItemText={"Javascript"}
          listItemClass={"skillText"}
        />
        <SimpleListItem listItemText={"React"} listItemClass={"skillText"} />
      </ul>
    </>
  );
}
