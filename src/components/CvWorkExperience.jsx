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

import "../styles/Cv.css";

export default function CvWorkExperience() {
  return (
    <>
      <ThirdHeaderHr
        headerName={"WORK EXPERIENCE"}
        headerClass={"cvHeader"}
        hrClassName={"headerLine"}
      />
      <ul className="workExperienceList">
        <ListItem
          placeJob={"Business Analyst"}
          placeJobClass={"jobPlaceJobText"}
          resultCompagny={"Company Inc."}
          resultCompagnyClass={"resultCompagnyText"}
          duration={"Jun 2010-Jan 2015"}
          durationClass={"durationText"}
          onClass={"durationText"}
        />
      </ul>
    </>
  );
}
