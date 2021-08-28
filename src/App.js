import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import ShowPhonetics from "./components/ShowPhonetics";
import ShowPrettyWords from "./components/ShowPrettyWords";

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const fetchWord = async () => {
  const fieldWord = document.getElementById("word_input").value;
  try {
    const response = await fetch(`${url}${fieldWord}`);
    const rawData = await response.json();
    return rawData;
  } catch (error) {
    return undefined;
  }
};

const doAssignmentA = async () => {
  let place = document.getElementById("output");
  let retVal = await fetchWord();
  if (typeof retVal === "undefined") {
    ReactDOM.render(<p>Enter a word to search</p>, place);
  } else if (retVal.title === "No Definitions Found") {
    ReactDOM.render(<p>No Definitions Found</p>, place);
  } else {
    ReactDOM.render(JSON.stringify(retVal), place);
  }
};

const doAssignmentB = async () => {
  let place = document.getElementById("output");
  let retVal = await fetchWord();
  if (typeof retVal === "undefined") {
    ReactDOM.render(<p>Enter a word to search</p>, place);
  } else if (retVal.title === "No Definitions Found") {
    ReactDOM.render(<p>No Definitions Found</p>, place);
  } else {
    ReactDOM.render(
      <div>
        <span id="assB_word">{retVal[0].word}</span> —{" "}
        <ShowPhonetics data={retVal[0]} />
      </div>,
      place
    );
  }
};

const doAssignmentC = async () => {
  let place = document.getElementById("output");
  let retVal = await fetchWord();
  if (typeof retVal === "undefined") {
    ReactDOM.render(<p>Enter a word to search</p>, place);
  } else if (retVal.title === "No Definitions Found") {
    ReactDOM.render(<p>No Definitions Found</p>, place);
  } else {
    ReactDOM.render(
      <div>
        <ShowPrettyWords data={retVal} />
      </div>,
      place
    );
  }
};

function App() {
  return (
    <div className="App">
      <h1 className="title">BRAINS DICTIONARY</h1>
      <section>
        <input type="text" id="word_input" defaultValue="duck" />
      </section>
      <section>
        <button onClick={doAssignmentA} className="clicky_1">
          Search for word (A)
        </button>
        <button onClick={doAssignmentB} className="clicky_1">
          Search phonetics (B)
        </button>
        <button onClick={doAssignmentC} className="clicky_1">
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
