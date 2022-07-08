import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import CountriesList from './components/Countries';

const App = () => {
  const [search, setSearch] = useState('');
  const [foundCountries, setFoundCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const responseData = response.data;
        setAllCountries(responseData);
        setFoundCountries(responseData);
      });
  };
  useEffect(hook, []);

  const handleOnChangeSearch = (event) => {
    const input = event.target.value;
    setSearch(input);

    const found = allCountries.filter((country) => country.name.common.search(new RegExp(input, 'i')) !== -1);

    setFoundCountries(found);
  };

  return (
    <div>
    <h1>Countries</h1>
    <SearchInput value={search} onChange={handleOnChangeSearch} />
    <CountriesList countries={foundCountries} />
    </div>
  );
};

export default App;
