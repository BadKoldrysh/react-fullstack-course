const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>;

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>;

const Content = ({ parts }) => {
  const sum = parts.reduce(
    (prev, curr) => curr.exercises + prev, 0
  );

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <Total sum={sum} />
    </div>
  );
};

const Header = ({ title }) => <h1>{title}</h1>;

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;