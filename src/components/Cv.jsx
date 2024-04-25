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

function SimpleListItem({ listItemText, listItemClass }) {
  return <li className={listItemClass}>{listItemText}</li>;
}

function IconText({ iconName, containerClass, iconText, iconTextClass }) {
  return (
    <div className={containerClass}>
      <span class="material-symbols-outlined">{iconName}</span>
      <span class={iconTextClass}>{iconText}</span>
    </div>
  );
}

export default function Cv() {
  return (
    <section className="cvContainer">
      <div className="leftSideContainer">
        <section className="basicInfoContainer">
          <h2 className="userNameHeader">Mustafa Özkara</h2>
          <h3 className="userJobHeader">Web Developer</h3>
          <p className="presentationText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            corporis eligendi quos natus consectetur sint eum nobis dolore neque
            error reiciendis explicabo ex minima quae fugit, corrupti,
            temporibus soluta blanditiiserror reiciendis explicabo ex minima
            quae fugit, corrupti, temporibus soluta blanditiiserror reiciendis
          </p>
        </section>
        <section>
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
            />
          </ul>
        </section>
        <section>
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
        </section>
      </div>
      <div className="rightSideContainer">
        <section className="contactInfoContainer">
          <IconText
            iconName={"mail"}
            containerClass={"contactContainer"}
            iconText={"mustafaexample@mail.com"}
            iconTextClass={"iconText"}
          />
          <IconText
            iconName={"smartphone"}
            containerClass={"contactContainer"}
            iconText={"0486 93 41 32"}
            iconTextClass={"iconText"}
          />
          <IconText
            iconName={"location_on"}
            containerClass={"contactContainer"}
            iconText={"Belgium, Brussels"}
            iconTextClass={"iconText"}
          />
          <IconText
            iconName={"link"}
            containerClass={"contactContainer"}
            iconText={"https://linkedin/mustafaozkara.com"}
            iconTextClass={"iconText"}
          />
        </section>
        <section>
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
            <SimpleListItem
              listItemText={"React"}
              listItemClass={"skillText"}
            />
          </ul>
        </section>
      </div>
    </section>
  );
}
