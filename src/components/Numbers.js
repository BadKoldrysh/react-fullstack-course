import Person from './Person';

const Numbers = ({ persons }) => <ul>{
  persons.map(
    person => <Person key={person.id} person={person} />
  )
}</ul>;

export default Numbers;
