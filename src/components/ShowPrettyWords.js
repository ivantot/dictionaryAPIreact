import ShowPrettyWord from "./ShowPrettyWord";
import "./ShowPrettyWords.css";

const ShowPrettyWords = (props) => {
  const allWords = props.data;
  const output = allWords.map((el, index) => (
    <li key={index} className="showPrettyWord">
      <ShowPrettyWord data={el} />
    </li>
  ));
  return (
    <div>
      <ol>{output}</ol>
    </div>
  );
};

export default ShowPrettyWords;

// carefull about syntax () not {} when napping to jsx
