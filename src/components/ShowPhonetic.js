import "./ShowPhonetic.css";

const ShowPhonetic = (props) => {
  const element = props.dataPhonetics;
  if (element.audio === undefined) {
    return <p className="phonetics">/{element.text}/</p>;
  }
  return (
    <p className="phonetics">
      /{element.text}/ <a href={element.audio}>audio</a>
    </p>
  );
};

export default ShowPhonetic;
