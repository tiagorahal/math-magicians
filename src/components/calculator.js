import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const onClickHandler = (buttonName) => {
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
    <div className="calculator">
      <div className="display">
        {updateDisplay()}
      </div>

      <div className="keyboard">
        <button type="button" className="key" onClick={() => { onClickHandler('AC'); }}>AC</button>
        <button type="button" className="key" onClick={() => { onClickHandler('+/-'); }}>+/-</button>
        <button type="button" className="key" onClick={() => { onClickHandler('%'); }}>%</button>
        <button type="button" className="key orange" onClick={() => { onClickHandler('÷'); }}>÷</button>

        <button type="button" className="key" onClick={() => { onClickHandler('7'); }}>7</button>
        <button type="button" className="key" onClick={() => { onClickHandler('8'); }}>8</button>
        <button type="button" className="key" onClick={() => { onClickHandler('9'); }}>9</button>
        <button type="button" className="key orange" onClick={() => { onClickHandler('x'); }}>x</button>

        <button type="button" className="key" onClick={() => { onClickHandler('4'); }}>4</button>
        <button type="button" className="key" onClick={() => { onClickHandler('5'); }}>5</button>
        <button type="button" className="key" onClick={() => { onClickHandler('6'); }}>6</button>
        <button type="button" className="key orange" onClick={() => { onClickHandler('-'); }}>-</button>

        <button type="button" className="key" onClick={() => { onClickHandler('1'); }}>1</button>
        <button type="button" className="key" onClick={() => { onClickHandler('2'); }}>2</button>
        <button type="button" className="key" onClick={() => { onClickHandler('3'); }}>3</button>
        <button type="button" className="key orange" onClick={() => { onClickHandler('+'); }}>+</button>

        <button type="button" className="key zero" onClick={() => { onClickHandler('0'); }}>0</button>
        <button type="button" className="key" onClick={() => { onClickHandler('.'); }}>.</button>
        <button type="button" className="key orange" onClick={() => { onClickHandler('='); }}>=</button>
      </div>

    </div>
  );
};

export default Calculator;
