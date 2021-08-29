import ShowWordDefinitions from "./ShowWordDefinitions";
import "./ShowMeanings.css";

const ShowMeanings = (props) => {
  const prettyWord = props.meanings;
  const meaning = prettyWord.meanings.map((el, index) => (
    <div>
      <li key={index} className="partOfSpeech">
        <span className="meaning_word">{prettyWord.word}, </span>
        <span>{el.partOfSpeech}</span>
      </li>
      <ol>
        <ShowWordDefinitions data={el.definitions} />
      </ol>
    </div>
  ));

  return meaning;
};

export default ShowMeanings;
