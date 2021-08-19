/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import './components/componentStyles.css';
import Calculator from './components/calculator';

class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
