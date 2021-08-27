const ShowWord = (props) => {
  const element = props.data;
  return (
    <div>
      {element.word}, {element.phonetic}, {element.phonetics}, {element.origin},{" "}
      {element.meanings}
    </div>
  );
};

export default ShowWord;
