import { useState, useEffect } from 'react';
import axios from 'axios';
import InputName from './components/inputs/Name';
import InputNumber from './components/inputs/Number';
import TypeSelect from './components/inputs/TypeSelect';
import Filter from './components/Filter';
import Numbers from './components/Numbers';
import NewEntryForm from './components/NewEntryForm';

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [foundPersons, setFoundPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newType, setNewType] = useState('');
  const [filterInput, setFilterInput] = useState('');
  const personTypes = props.personTypes;

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
        setFoundPersons(response.data);
      });
  };
  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();

    const existingPersons = persons.filter(person => person.name === newName);
    if (existingPersons.length !== 0) {
      alert(newName + ' is already added to phonebook');
      return;
    }

    const newPersonsList = persons.concat({ id: persons.length + 1, name: newName, number: newNumber, type: newType });
    setPersons(newPersonsList);
    setFoundPersons(newPersonsList);
    setNewName('');
    setNewNumber('');
    setFilterInput('');
  };

  const handleOnChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleOnChangeNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleOnChangeType = (event) => {
    setNewType(event.target.value);
  };

  const handleOnChangeFilter = (event) => {
    const found = persons.filter((person) => {
      const regexp = new RegExp(event.target.value, 'i');

      return person.name.search(regexp) !== -1;
    });

    setFoundPersons(found);
    setFilterInput(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterInput} onChange={handleOnChangeFilter} />
      <h2>add a new person</h2>
      <NewEntryForm
        onSubmit={addPerson}
        nameInput={<InputName value={newName} onChange={handleOnChangeName} />}
        numberInput={<InputNumber value={newNumber} onChange={handleOnChangeNumber} />}
        typeSelect={<TypeSelect value={newType} onChange={handleOnChangeType} personTypes={personTypes} />}
      />
      <h2>Numbers</h2>
      <Numbers persons={foundPersons} />
    </div>
  );
};

export default App;
