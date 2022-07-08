import CountriesList from "./CountriesList";
import CountryDetail from "./CountryDetail";

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 0) {
    return <div>No matches</div>;
  } else if (countries.length === 1) {
    return <CountryDetail country={countries[0]} />;
  } else {
    return <CountriesList countries={countries} />;
  }
};

export default Countries;
