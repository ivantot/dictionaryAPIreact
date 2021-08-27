import ShowPhonetic from "./ShowPhonetic";

const ShowPhonetics = (props) => {
  const phoneticsList = props.data;
  const jsxPhoneticsList = [];
  phoneticsList.phonetics.map((el) => {
    jsxPhoneticsList.push(<ShowPhonetic dataPhonetics={el} />);
  });
  console.log(jsxPhoneticsList);
  return <div>{jsxPhoneticsList}</div>;
};

export default ShowPhonetics;
