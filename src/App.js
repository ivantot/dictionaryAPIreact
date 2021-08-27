import "./App.css";
import React from "react";
import ShowWord from "./components/ShowWord";
import ReactDOM from "react-dom";

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let place = document.getElementById("output");

const fetchWord = async () => {
  try {
    const fieldWord = document.getElementById("word_input").value;
    let response = await fetch(`${url}${fieldWord}`);
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    let data = await response.json();
    ReactDOM.render(<ShowWord word={data} />, place);
  } catch (error) {
    console.log("Error caught!");
  }
};

// const simpleDefinition = async () => {
//   await loadWord().then((word) => {
//     const retVal = { dict: word };
//     ReactDOM.render(WordLayout(retVal), place);
//   });
// };

// const searchAudio = async () => {
//   // let word = document.getElementById("word_input").value;
//   // let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
//   // let wordDefinition = await fetch(`${url}${word}`);
//   // await wordDefinition.json().then((data) => {
//   //   let elem = <Phonetics words={data} />;
//   //   let place = document.getElementById("words");
//   //   ReactDOM.render(elem, place);
//   // });
// };

// const searchWords = async () => {};

function App() {
  return (
    <div className="App">
      <section>
        <input type="text" id="word_input" />
      </section>
      <section>
        <button onClick={fetchWord} id="clicky_1">
          Search for word (A)
        </button>

        <button onClick={fetchWord} id="clicky_1">
          Search phonetics (B)
        </button>
        <button onClick={fetchWord} id="clicky_1">
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
