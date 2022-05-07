import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The App is used by pressing the buttons</div>;
  }

  return <div>Button press history: {allClicks.join(" ")}</div>;
};

const App = () => {
  // const [clicks, setClicks] = useState({left: 0, right: 0});
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  // const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1});
  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'));
  //   setLeft(left + 1);
  // };
  const leftButtonHandler = (modifier) => {
    return () => {
      setAll(allClicks.concat("L"));
      setLeft(left + modifier);
    };
  };

  // const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1});
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      <Button onClick={leftButtonHandler(3)} text={"Left (" + left + ")"} />
      <Button onClick={handleRightClick} text={"Right (" + right + ")"} />
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
