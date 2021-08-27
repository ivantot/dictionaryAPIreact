const ShowWord = (props) => {
  let wordArray = props.word;
  let wordElements = JSON.stringify(wordArray);
  return <div>{wordElements}</div>;
};

export default ShowWord;
