import "./App.css";
import React from "react";
import ShowWords from "./components/ShowWords";
import ShowWord from "./components/ShowWord";

import ReactDOM from "react-dom";

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fetchWord = async () => {
  const fieldWord = document.getElementById("word_input").value;
  let place = document.getElementById("output");

  try {
    const response = await fetch(`${url}${fieldWord}`);
    const rawData = await response.json();
    return rawData;
  } catch (error) {
    throw new Error("Something went badly wrong!");
  }
};

const doAssignmentA = async () => {
  let place = document.getElementById("output");
  let retVal = await fetchWord();
  if (retVal.title == "No Definitions Found") {
    return ReactDOM.render(<p>No Definitions Found</p>, place);
  } else {
    ReactDOM.render(JSON.stringify(retVal), place);
  }
};

function App() {
  return (
    <div className="App">
      <section>
        <input type="text" id="word_input" defaultValue="duck" />
      </section>
      <section>
        <button onClick={doAssignmentA} className="clicky_1">
          Search for word (A)
        </button>

        <button onClick={fetchWord} className="clicky_1">
          Search phonetics (B)
        </button>
        <button onClick={fetchWord} className="clicky_1">
          Show all definitions (C)
        </button>
      </section>
      <section>
        <div id="output"></div>
      </section>
    </div>
  );
}

export default App;
