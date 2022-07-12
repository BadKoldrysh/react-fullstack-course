const Person = ({ person, deletePerson }) => (
  <li>{person.name} | {person.number} | {person.type} | <button onClick={deletePerson}>delete</button></li>
);

export default Person;
