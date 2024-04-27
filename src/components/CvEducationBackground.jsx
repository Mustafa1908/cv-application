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

export default function CvEducationBackground() {
  return (
    <>
      <ThirdHeaderHr
        headerName={"EDUCATION BACKGROUND"}
        headerClass={"cvHeader"}
        hrClassName={"headerLine"}
      />
      <ul>
        <ListItem
          placeJob={"University of London"}
          placeJobClass={"jobPlaceJobText"}
          resultCompagny={"Ph.D in Philosophy"}
          resultCompagnyClass={"resultCompagnyText"}
          duration={"Oct 2010-Jan 2015"}
          durationClass={"durationText"}
          onClass={"durationText"}
        />
      </ul>
    </>
  );
}
