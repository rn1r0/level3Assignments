
import { useState } from 'react';
import Die from "./Die.jsx"

function DiceBox() {
  const [numbers, setNumbers] = useState([null, null, null, null, null]);
  const [rolls, setRolls] = useState(0);

  // Function to generate random numbers for each die
  const rollDice = () => {
    const newNumbers = numbers.map(() => Math.floor(Math.random() * 6) + 1);
    setNumbers(newNumbers);
    setRolls(rolls + 1);
  };

  // Reset dice after every 3rd roll
  if (rolls % 3 === 0 && rolls !== 0) {
    setNumbers([null, null, null, null, null]);
  }

  return (
    <div>
      <div>
        {numbers.map((number, index) => (
          <Die key={index} number={number} />
        ))}
      </div>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default DiceBox;
