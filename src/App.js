import { useState } from 'react';
import Person from './components/Person';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [foundPersons, setFoundPersons] = useState(persons);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    const existingPersons = persons.filter(person => person.name === newName);
    if (existingPersons.length !== 0) {
      alert(newName + ' is already added to phonebook');
      return;
    }

    const newPersonsList = persons.concat(personObject);
    setPersons(newPersonsList);
    setNewName('');
    setNewNumber('');
    setFoundPersons(newPersonsList);
    setSearchInput('');
  };

  const handleOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberOnChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchOnChange = (event) => {
    const found = persons.filter((person) => {
      const regexp = new RegExp(event.target.value, 'i');

      return person.name.search(regexp) !== -1;
    });

    setFoundPersons(found);
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={searchInput} onChange={handleSearchOnChange} /></div>
      <h2>add a new person</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleOnChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberOnChange} /></div>
        <div>
          <button style={{cursor:'pointer'}} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {
        foundPersons.map(
          person => <Person key={person.name} person={person} />
        )
      }
      </ul>
    </div>
  );
};

export default App;
