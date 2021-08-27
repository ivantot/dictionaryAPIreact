import ShowWord from "./ShowWord";

const ShowWords = (props) => {
  const wordList = props.data;
  console.log(wordList);
  const jsxWordList = wordList.map((el) => <ShowWord word={el} />);
  return <div>aaa</div>;
};

export default ShowWords;
