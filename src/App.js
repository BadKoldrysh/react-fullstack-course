import { useState } from 'react';

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>);

const StatisticsLine = ({text, value}) => (
  <tr><td>{text}</td><td>{value}</td></tr>
);

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <span>No feedback given</span>
      </div>
    );
  }

  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const GiveFeedbackSection = ({goodHandler, neutralHandler, badHandler}) => {
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={goodHandler} text="good" />
      <Button onClick={neutralHandler} text="neutral" />
      <Button onClick={badHandler} text="bad" />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => {
    setGood(good + 1);
  };
  const neutralHandler = () => {
    setNeutral(neutral + 1);
  };
  const badHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <GiveFeedbackSection goodHandler={goodHandler} neutralHandler={neutralHandler} badHandler={badHandler} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
