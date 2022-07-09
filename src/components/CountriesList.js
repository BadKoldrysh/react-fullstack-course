import ShowButton from "./ShowButton";

const CountriesList = ({ countries }) => {
  const list = countries.map((country) => <li key={country.cca2}>{country.name.common} <ShowButton /></li>);

  return <ul style={{ listStyle:'none', paddingLeft:0, marginTop:0 }} >{list}</ul>;
};

export default CountriesList;
