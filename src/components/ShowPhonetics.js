import ShowPhonetic from "./ShowPhonetic";

const ShowPhonetics = (props) => {
  const phoneticsList = props.data;
  const jsxPhoneticsList = [];
  phoneticsList.phonetics.forEach((el) => {
    jsxPhoneticsList.push(<ShowPhonetic dataPhonetics={el} />);
  });
  return <span>{jsxPhoneticsList}</span>;
};

export default ShowPhonetics;
