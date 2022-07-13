import { useState, useEffect } from 'react';
import personsService from './services/persons';
import InputName from './components/inputs/Name';
import InputNumber from './components/inputs/Number';
import TypeSelect from './components/inputs/TypeSelect';
import Filter from './components/Filter';
import Numbers from './components/Numbers';
import NewEntryForm from './components/NewEntryForm';
import Notification from './components/Notification';

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [foundPersons, setFoundPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newType, setNewType] = useState('');
  const [filterInput, setFilterInput] = useState('');
  const [notification, setNotification] = useState({ text: null });
  const personTypes = props.personTypes;

  const hook = () => {
    personsService.getAll()
      .then(initialData => {
        setPersons(initialData);
        setFoundPersons(initialData);
      });
  };
  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();

    const existingPersons = persons.filter(person => person.name === newName);
    if (existingPersons.length !== 0) {
      const personToUpdate = existingPersons[0];
      if (window.confirm(personToUpdate.name + ' is already added to phonebook, replace the old number with a new one?')) {
        personToUpdate.number = newNumber;
        personsService.update({ id: personToUpdate.id, personToUpdate })
          .then(updatedObject => {
            persons.find(person => person.id === updatedObject.id).number = updatedObject.number;
            updatePersonsList(persons);
            refreshForm();
            notify('Updated ' + updatedObject.name);
          }).catch(error => {
            notify('Information of ' + personToUpdate.name + ' has already been removed from server', true, 5000)
            updatePersonsList(persons.filter(person => person.id !== personToUpdate.id));
            refreshForm();
          });
      }

      return;
    }

    const newPersonObject = { id: persons.length + 1, name: newName, number: newNumber, type: newType };

    personsService.create({ newPersonObject })
      .then(createdObject => {
        updatePersonsList(persons.concat(createdObject));
        refreshForm();
        notify('Added ' + createdObject.name)
      });
  };

  const notify = (message, isError = false, hideAfterMs = 3000) => {
    setNotification({ text: message, isError: isError });
    setTimeout(() => {
      setNotification({ text: null });
    }, hideAfterMs);
  }

  const updatePersonsList = (updatedList) => {
    setPersons(updatedList);
    setFoundPersons(updatedList);
  };

  const refreshForm = () => {
    setNewName('');
    setNewNumber('');
    setNewType('unknown');
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

  const deletePerson = personToDelete => {
    if (window.confirm('Delete ' + personToDelete.name + '?')) {
      const id = personToDelete.id;

      personsService.deletePerson({ id })
        .then(response => {
          setPersons(persons.filter(person => person.id !== id));
          setFoundPersons(foundPersons.filter(person => person.id !== id));
          notify('Deleted ' + personToDelete.name);
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.text} isError={notification.isError} />
      <Filter value={filterInput} onChange={handleOnChangeFilter} />
      <h2>add a new person</h2>
      <NewEntryForm
        onSubmit={addPerson}
        nameInput={<InputName value={newName} onChange={handleOnChangeName} />}
        numberInput={<InputNumber value={newNumber} onChange={handleOnChangeNumber} />}
        typeSelect={<TypeSelect value={newType} onChange={handleOnChangeType} personTypes={personTypes} />}
      />
      <h2>Numbers</h2>
      <Numbers persons={foundPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
