const ShowPhonetic = (props) => {
  const element = props.dataPhonetics;
  return (
    <div>
      /{element.text}/ <a href={element.audio}>audio</a>.
    </div>
  );
};

export default ShowPhonetic;
