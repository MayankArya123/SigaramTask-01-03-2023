import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  var count = 0;

  const setColor = (e) => {
    const prev = document.querySelectorAll(".div.red.prev");

    if (prev.length > 0) {
      prev[0].classList.remove("red");
      prev[0].classList.remove("prev");
    }
    const reds = document.querySelectorAll(".div.red");
    if (reds.length > 0) {
      reds[0].classList.add("prev");
    }

    e.target.classList.add("red");


  };

  return (
    <div className="App">
      <div name="1" className="div " onClick={(e) => setColor(e)}></div>
      <div name="2" className="div " onClick={(e) => setColor(e)}></div>
      <div name="3" className="div " onClick={(e) => setColor(e)}></div>
      <div name="4" className="div " onClick={(e) => setColor(e)}></div>

      <div name="5" className="div " onClick={(e) => setColor(e)}></div>
      <div name="6" className="div " onClick={(e) => setColor(e)}></div>
      <div name="7" className="div " onClick={(e) => setColor(e)}></div>
      <div name="8" className="div " onClick={(e) => setColor(e)}></div>

      <div name="9" className="div " onClick={(e) => setColor(e)}></div>
      <div name="10" className="div " onClick={(e) => setColor(e)}></div>
      <div name="11" className="div " onClick={(e) => setColor(e)}></div>
      <div name="12" className="div " onClick={(e) => setColor(e)}></div>

      <div name="13" className="div " onClick={(e) => setColor(e)}></div>
      <div name="14" className="div " onClick={(e) => setColor(e)}></div>
      <div name="15" className="div " onClick={(e) => setColor(e)}></div>
      <div name="16" className="div " onClick={(e) => setColor(e)}></div>
    </div>
  );
}

export default App;
