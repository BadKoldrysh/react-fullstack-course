const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length === 0) {
    return <div>No matches</div>;
  } else if (countries.length === 1) {
    const country = countries[0];
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
  } else {
    const list = countries.map((country) => <li key={country.cca2}>{country.name.common}</li>);
    return <ul style={{ listStyle:'none', paddingLeft:0, marginTop:0 }} >{list}</ul>;
  }
};


export default Countries;
