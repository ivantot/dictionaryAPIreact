const AudioLayout = (props) => {
  return (
    <div>
      <b>{props.phonetics.word}</b> - /{props.phonetics.phonetic}/{" "}
      <a href={props.phonetics.audio}>audio</a>
    </div>
  );
};

export default AudioLayout;
