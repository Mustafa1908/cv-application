import Header from "./components/Header";
import BasicInfo from "./components/BasicInfo";
import ContactInfo from "./components/ContactInfo";
import EducationBackground from "./components/EducationBackground";
import WorkExperience from "./components/WorkExperience";
import TechnicalSkills from "./components/TechnicalSkills";
import CvBasicInfo from "./components/CvBasicInfo";
import CvEducationBackground from "./components/CvEducationBackground";
import CvWorkExperience from "./components/CvWorkExperience";
import CvContact from "./components/CvContact";
import CvSkills from "./components/CvSkills";
import "./styles/styles.css";

function App() {
  return (
    <>
      <div className="pageContainer">
        <div className="rightSidePage">
          <section className="cvContainer">
            <div className="leftSideContainer">
              <section className="basicInfoContainer">
                <CvBasicInfo />
              </section>
              <section>
                <CvEducationBackground />
              </section>
              <section>
                <CvWorkExperience />
              </section>
            </div>
            <div className="rightSideContainer">
              <section className="contactInfoContainer">
                <CvContact />
              </section>
              <section>
                <CvSkills />
              </section>
            </div>
          </section>
        </div>
        <div className="leftSidePage">
          <Header />
          <main>
            <form>
              <BasicInfo />
              <ContactInfo />
            </form>
            <form>
              <EducationBackground />
            </form>
            <form>
              <WorkExperience />
            </form>
            <form>
              <TechnicalSkills />
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
