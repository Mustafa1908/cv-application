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
      <span className={durationClass}>{duration}</span>
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

export default function CvWorkExperience() {
  return (
    <>
      <ThirdHeaderHr
        headerName={"WORK EXPERIENCE"}
        headerClass={"cvHeader"}
        hrClassName={"headerLine"}
      />
      <ul>
        <ListItem
          placeJob={"Business Analyst"}
          placeJobClass={"jobPlaceJobText"}
          resultCompagny={"Company Inc."}
          resultCompagnyClass={"resultCompagnyText"}
          duration={"Nov 2015-Jan 2020"}
          durationClass={"durationText"}
        />
      </ul>
    </>
  );
}
