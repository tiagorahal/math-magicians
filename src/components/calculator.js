import React from 'react';
import './Calculator.css';

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
          <div className="calculator-key">AC</div>
          <div className="calculator-key">+/-</div>
          <div className="calculator-key">%</div>
          <div className="calculator-key calculator-key-orange">÷</div>

          <div className="calculator-key">7</div>
          <div className="calculator-key">8</div>
          <div className="calculator-key">9</div>
          <div className="calculator-key calculator-key-orange">×</div>

          <div className="calculator-key">4</div>
          <div className="calculator-key">5</div>
          <div className="calculator-key">6</div>
          <div className="calculator-key calculator-key-orange">-</div>

          <div className="calculator-key">1</div>
          <div className="calculator-key">2</div>
          <div className="calculator-key">3</div>
          <div className="calculator-key calculator-key-orange">+</div>

          <div className="calculator-key calculator-key-zero">0</div>
          <div className="calculator-key">.</div>
          <div className="calculator-key calculator-key-orange">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
