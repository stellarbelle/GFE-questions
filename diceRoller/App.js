import { useState, useEffect } from "react";

export default function App() {
  const [diceAmt, setDiceAmt] = useState(1);
  const [dice, setDice] = useState([]);

  useEffect(() => {
    if (dice.length === 0) {
      const initState = newDice(diceAmt);
      setDice([...initState]);
    }
  }, []);

  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

  const newDice = (num, diceArr = dice) => {
    while (num > 0) {
      let roll = getRandomIntInclusive(1, 6);
      const rollArr = [];
      while (roll > 0) {
        rollArr.push(<div key={`roll-${roll}`} className="roll"></div>);
        roll--;
      }
      diceArr.push(
        <div key={`dice-${diceArr.length + 1}`} className="dice">
          {rollArr}
        </div>,
      );
      num--;
    }
    return diceArr;
  };

  const rollDice = () => {
    const dice = newDice(diceAmt, []);

    setDice(dice);
  };

  const updateDiceArr = (val) => {
    let updatedDice = [];
    if (val > diceAmt) {
      updatedDice = newDice(val - diceAmt);
    } else {
      updatedDice = dice.slice(0, val);
    }
    setDiceAmt(val);
    setDice(updatedDice);
  };

  return (
    <div className="wrapper">
      <p>Number of Dice</p>
      <div>
        <input
          type="number"
          min="1"
          max="12"
          value={diceAmt}
          onChange={(e) => updateDiceArr(e.target.value)}
        />
        <button onClick={() => rollDice()}>Roll</button>
      </div>
      <div className="dice-wrapper">{dice}</div>
    </div>
  );
}
