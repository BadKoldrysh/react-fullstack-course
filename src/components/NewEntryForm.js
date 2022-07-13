const NewEntryForm = ({ onSubmit, nameInput, numberInput, typeSelect }) => {
  return (
    <form onSubmit={onSubmit}>
      {nameInput}
      {numberInput}
      {typeSelect}
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default NewEntryForm;