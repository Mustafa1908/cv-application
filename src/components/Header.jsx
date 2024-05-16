import "../styles/Header.css";

export default function Header() {
  function printCvPage() {
    window.print();
  }

  return (
    <>
      <header>
        <div className="headerPrintContainer">
          <h1 className="header">cv generator</h1>
          <div onClick={printCvPage} tabIndex={0}>
            <span class="material-symbols-outlined printCvIcon">print</span>
          </div>
        </div>
        <p className="pagePresentationText">
          Create your CV by filling out the forms below! Your CV will be updated
          in the preview.
        </p>
      </header>
    </>
  );
}
