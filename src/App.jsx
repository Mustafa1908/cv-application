import PagePresentation from "./components/PagePresentation";
import "./styles/styles.css";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="pageContainer">
        <div className="leftSidePage">
          <PagePresentation />
          <Form />
        </div>
        <div className="rightSidePage"></div>
      </div>
    </>
  );
}

export default App;
