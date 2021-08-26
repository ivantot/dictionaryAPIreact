import AudioLayout from "./AudioLayout";

export function Phonetics(props) {
  let nizPhonetics = props.phonetics;
  alert(nizPhonetics);
  let phoneticsJsx = nizPhonetics.map((p) => <AudioLayout word={p} />);

  let element = <div>{phoneticsJsx}</div>;

  return element;
}
