import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">
          0
        </div>
        <div className="calculator-keyboard">
          <button type="button" className="calculator-key">AC</button>
          <button type="button" className="calculator-key">+/-</button>
          <button type="button" className="calculator-key">%</button>
          <button type="button" className="calculator-key calculator-key-orange">÷</button>

          <button type="button" className="calculator-key">7</button>
          <button type="button" className="calculator-key">8</button>
          <button type="button" className="calculator-key">9</button>
          <button type="button" className="calculator-key calculator-key-orange">×</button>

          <button type="button" className="calculator-key">4</button>
          <button type="button" className="calculator-key">5</button>
          <button type="button" className="calculator-key">6</button>
          <button type="button" className="calculator-key calculator-key-orange">-</button>

          <button type="button" className="calculator-key">1</button>
          <button type="button" className="calculator-key">2</button>
          <button type="button" className="calculator-key">3</button>
          <button type="button" className="calculator-key calculator-key-orange">+</button>

          <button type="button" className="calculator-key calculator-key-zero">0</button>
          <button type="button" className="calculator-key">.</button>
          <button type="button" className="calculator-key calculator-key-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
