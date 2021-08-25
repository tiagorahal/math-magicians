import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const newState = calculate({ total, next, operation }, buttonName);
    setTotal(newState.total);
    setNext(newState.next);
    setOperation(newState.operation);
  };

  const updateDisplay = () => {
    const displayTotal = total || '';
    const displayOperation = operation || '';
    const displayNext = next || '';
    return `${displayTotal} ${displayOperation} ${displayNext}`;
  };

  return (
    <main className="calculator-content">
      <h2>Let&apos;s do some math!</h2>
      <div className="calculator">
        <div className="calculator-display">
          {updateDisplay()}
        </div>
        <div className="calculator-keyboard">
          <button type="button" onClick={() => handleClick('AC')} className="calculator-key">AC</button>
          <button type="button" onClick={() => handleClick('+/-')} className="calculator-key">+/-</button>
          <button type="button" onClick={() => handleClick('%')} className="calculator-key">%</button>
          <button type="button" onClick={() => handleClick('÷')} className="calculator-key calculator-key-orange">÷</button>

          <button type="button" onClick={() => handleClick('7')} className="calculator-key">7</button>
          <button type="button" onClick={() => handleClick('8')} className="calculator-key">8</button>
          <button type="button" onClick={() => handleClick('9')} className="calculator-key">9</button>
          <button type="button" onClick={() => handleClick('×')} className="calculator-key calculator-key-orange">×</button>

          <button type="button" onClick={() => handleClick('4')} className="calculator-key">4</button>
          <button type="button" onClick={() => handleClick('5')} className="calculator-key">5</button>
          <button type="button" onClick={() => handleClick('6')} className="calculator-key">6</button>
          <button type="button" onClick={() => handleClick('-')} className="calculator-key calculator-key-orange">-</button>

          <button type="button" onClick={() => handleClick('1')} className="calculator-key">1</button>
          <button type="button" onClick={() => handleClick('2')} className="calculator-key">2</button>
          <button type="button" onClick={() => handleClick('3')} className="calculator-key">3</button>
          <button type="button" onClick={() => handleClick('+')} className="calculator-key calculator-key-orange">+</button>

          <button type="button" onClick={() => handleClick('0')} className="calculator-key calculator-key-zero">0</button>
          <button type="button" onClick={() => handleClick('.')} className="calculator-key">.</button>
          <button type="button" onClick={() => handleClick('=')} className="calculator-key calculator-key-orange">=</button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
