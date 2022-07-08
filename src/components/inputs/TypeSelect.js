const TypeSelect = ({ value, onChange, personTypes}) => (
  <div>type:
    <select value={value} onChange={onChange}>
      {
        personTypes.map(
          ({ value, name }) => <option key={value} value={value}>{name}</option>
        )
      }
    </select>
  </div>
);

export default TypeSelect;
