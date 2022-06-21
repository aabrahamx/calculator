import React, { useState } from 'react';

import { Button } from '../components/Button/Button.js';
import { Display } from '../components/Display/Display.js';
import { inputValues as btnValues } from '../helpers/inputValues.js';
import './App.css';
import { calculate } from '../util/calculate.js';

const windowHeight = window.innerHeight;
const operators = ['x', '/', '+', '-'];

function App() {
  const [stored, setStored] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isCal, setIsCal] = useState(false);
  const [currNum, setcurrNum] = useState('');

  function handleClick({ target }) {
    const input = target.value;

    if (input === 'C') {
      reset();
      return;
    }
    if (input === '=') {
      handleCalculate();
      return
    }

    if (!isNaN(target.value) || target.value === '.') {
      if (isCal) {
        setcurrNum(input);
        setIsCal(false);
      } else {
        setcurrNum(currNum + input);
      }
      return;
    }

    if (operators.includes(input)) {
      setOperator(input);
      setStored(currNum);
      setcurrNum('');
      return;
    }
  }

  function handleCalculate() {
    const calculated = calculate(stored, currNum, operator)
    setcurrNum(calculated);
    setIsCal(true);
  }

  function reset() {
    setStored(null);
    setOperator(null)
    setIsCal(false)
    setcurrNum('')
  }

  return (
    <div className="App" style={{ height: windowHeight }}>
      <div className="cont">
        <Display className="display" number={currNum} />

        {btnValues.map((btn) => {
          return (
            <Button
              btnValue={btn.value}
              className={`btn${btn.name}`}
              key={`btn${btn.name}`}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
