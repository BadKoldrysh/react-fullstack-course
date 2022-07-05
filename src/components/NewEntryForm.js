const NewEntryForm = ({ onSubmit, nameInput, numberInput, typeSelect }) => {
  return (
    <form onSubmit={onSubmit}>
      {nameInput}
      {numberInput}
      {typeSelect}
      <div>
        <button style={{cursor:'pointer'}} type="submit">add</button>
      </div>
    </form>
  );
};

export default NewEntryForm;