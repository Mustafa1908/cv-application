import "../styles/Cv.css";

function ListItem({
  placeJob,
  placeJobClass,
  resultCompagny,
  resultCompagnyClass,
  duration,
  durationClass,
}) {
  return (
    <div className="listItemContainer">
      <div className="educationContainer">
        <li className={placeJobClass}>{placeJob}</li>
        <span className={resultCompagnyClass}>{resultCompagny}</span>
      </div>

      <p className={durationClass}>{duration}</p>
    </div>
  );
}

function ThirdHeaderHr({ headerName, headerClass, hrClassName }) {
  return (
    <div className="headerContainer">
      <h3 className={headerClass}>{headerName}</h3>
      <hr className={hrClassName} />
    </div>
  );
}

export default function CvEducationBackground() {
  return (
    <>
      <ThirdHeaderHr
        headerName={"EDUCATION"}
        headerClass={"cvHeader"}
        hrClassName={"headerLine"}
      />
      <ul className="educationList">
        <ListItem
          placeJob={"University of London"}
          placeJobClass={"jobPlaceJobText"}
          resultCompagny={"Ph.D in Philosophy"}
          resultCompagnyClass={"resultCompagnyText"}
          duration={"Apr 2010-Aug 2015"}
          durationClass={"durationText"}
          onClass={"durationText"}
        />
      </ul>
    </>
  );
}
