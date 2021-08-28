import "./ShowWordDefinitions.css";

const ShowWordDefinitions = (props) => {
  const definitions = props.data;
  const arr = [];

  definitions.forEach((el1, index) => {
    if (typeof el1.example !== "undefined") {
      arr.push(
        <li key={index}>
          <span>{el1.definition}</span>
          <br />
          <p>
            <span className="example_title">Example: </span>{" "}
            <span className="example">{el1.example}</span>
          </p>
          <hr className="hor_rule" />
        </li>
      );
    } else {
      arr.push(
        <li key={index}>
          <span>{el1.definition}</span>
          <hr className="hor_rule" />
        </li>
      );
    }
  });
  return <div className="wordDefintions">{arr}</div>;
};

export default ShowWordDefinitions;
