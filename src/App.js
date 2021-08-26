import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import WordLayout from "./WordLayout";
import AudioLayout from "./AudioLayout";
import { Phonetics } from "./Phonetics";

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const loadWord = async () => {
  let word = document.getElementById("word_input").value;
  let getWord = await fetch(`${url}${word}`);
  let wordPromise = await getWord.json();
  console.log(wordPromise[0].word);
  return wordPromise;
};

const simpleDefinition = () => {
  let output = loadWord().word;
  let place = document.getElementById("words");
  ReactDOM.render(output, place);
};

const searchWord = async () => {
  let word = document.getElementById("word_input").value;
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  let wordDefinition = await fetch(`${url}${word}`);
  let wordDefinition_obj = await wordDefinition.json();
  let output = JSON.stringify(wordDefinition_obj);
  let place = document.getElementById("words");
  ReactDOM.render(WordLayout(output), place);
};

const searchAudio = async () => {
  // let word = document.getElementById("word_input").value;
  // let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // let wordDefinition = await fetch(`${url}${word}`);
  // await wordDefinition.json().then((data) => {
  //   let elem = <Phonetics words={data} />;
  //   let place = document.getElementById("words");
  //   ReactDOM.render(elem, place);
  // });
};

const searchWords = async () => {};

function App() {
  return (
    <div className="App">
      <div className="input_field">
        <input type="text" id="word_input" />
      </div>
      <div className="buttons">
        <button onClick={searchWord} id="clicky_1">
          {" "}
          Search for word (A){" "}
        </button>
        <button onClick={searchAudio} id="clicky_1">
          {" "}
          Search phonetics (B){" "}
        </button>
        <button onClick={searchWords} id="clicky_1">
          {" "}
          Show all definitions (C){" "}
        </button>
      </div>
      <div id="words"></div>
    </div>
  );
}

export default App;
