import React from 'react';
import calculate from '../logic/calculate';
import '../App.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(() => ({
      total: newState.total,
      next: newState.next,
      operation: newState.operation,
    }));
  }

  updateDisplay() {
    let { total, next, operation } = this.state;
    total = total || '';
    operation = operation || '';
    next = next || '';
    return `${total} ${operation} ${next}`;
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">
          {this.updateDisplay()}
        </div>
        <div className="calculator-keyboard">
          <button type="button" onClick={() => this.handleClick('AC')} className="calculator-key">AC</button>
          <button type="button" onClick={() => this.handleClick('+/-')} className="calculator-key">+/-</button>
          <button type="button" onClick={() => this.handleClick('%')} className="calculator-key">%</button>
          <button type="button" onClick={() => this.handleClick('÷')} className="calculator-key calculator-key-orange">÷</button>

          <button type="button" onClick={() => this.handleClick('7')} className="calculator-key">7</button>
          <button type="button" onClick={() => this.handleClick('8')} className="calculator-key">8</button>
          <button type="button" onClick={() => this.handleClick('9')} className="calculator-key">9</button>
          <button type="button" onClick={() => this.handleClick('×')} className="calculator-key calculator-key-orange">×</button>

          <button type="button" onClick={() => this.handleClick('4')} className="calculator-key">4</button>
          <button type="button" onClick={() => this.handleClick('5')} className="calculator-key">5</button>
          <button type="button" onClick={() => this.handleClick('6')} className="calculator-key">6</button>
          <button type="button" onClick={() => this.handleClick('-')} className="calculator-key calculator-key-orange">-</button>

          <button type="button" onClick={() => this.handleClick('1')} className="calculator-key">1</button>
          <button type="button" onClick={() => this.handleClick('2')} className="calculator-key">2</button>
          <button type="button" onClick={() => this.handleClick('3')} className="calculator-key">3</button>
          <button type="button" onClick={() => this.handleClick('+')} className="calculator-key calculator-key-orange">+</button>

          <button type="button" onClick={() => this.handleClick('0')} className="calculator-key calculator-key-zero">0</button>
          <button type="button" onClick={() => this.handleClick('.')} className="calculator-key">.</button>
          <button type="button" onClick={() => this.handleClick('=')} className="calculator-key calculator-key-orange">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;