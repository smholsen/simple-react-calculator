import React, { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleClick = (value) => {
      setInput(input + value);
    };

    const handleCalculate = () => {
      setOutput(eval(input));
      setInput('');
    };

    const handleClear = () => {
      setInput('');
      setOutput('');
    };

    return (
      <div className="calculator">
        <div className="input">{input}</div>
        <div className="output">{output}</div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleCalculate()}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
        <button className="mt" onClick={() => handleClear()}>Clear</button>
      </div>
    );
};

export default Calculator;