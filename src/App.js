import { useState } from 'react';
import Person from './components/Person';

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    const existingPersons = persons.filter(person => person.name === newName);
    if (existingPersons.length !== 0) {
      alert(newName + 'is already added to phonebook');
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };

  const handleOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberOnChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleOnChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberOnChange} /></div>
        <div>debug: {newName} {newNumber}</div>
        <div>
          <button style={{cursor:'pointer'}} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {
        persons.map(
          person => <Person key={person.name} person={person} />
        )
      }
      </ul>
    </div>
  );
};

export default App;
