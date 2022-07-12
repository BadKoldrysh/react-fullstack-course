import Person from './Person';

const Numbers = ({ persons, deletePerson }) => (
  <ul>
  {
    persons.map(
      person =>
        <Person
          key={person.id}
          person={person}
          deletePerson={() => deletePerson(person)}
        />
    )
  }
  </ul>
);

export default Numbers;
