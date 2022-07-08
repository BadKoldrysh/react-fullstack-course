const CountryDetail = ({ country }) => {
  const languages = Object.values(country.languages);

  return <div>
    <h1>{country.name.common}</h1>
    <div>
      <span>capital {country.capital[0]}</span>
      <br />
      <span>area {country.area}</span>
    </div>
    <div>
      <h3>languages:</h3>
      <ul>
        { languages.map(lang => <li key={lang}>{lang}</li>) }
      </ul>
    </div>
    <div style={{ width:'300px' }}>
      <img style={{ width:'100%' }} alt="flag image" src={country.flags.svg} />
    </div>
  </div>;
};

export default CountryDetail;
