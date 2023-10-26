import React, { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import "../styles.css";

function CalculatorGrid() {
  const [currentOperand, setCurrentOperand] = useState<string>("");
  const [previousOperand, setPreviousOperand] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [darkMode, setDarkMode] = useState(false);

  const appendNumber = (number: string) => {
    if (currentOperand === "0") {
      setCurrentOperand(number);
    } else {
      setCurrentOperand(currentOperand + number);
    }
  };

  const chooseOperation = (op: string) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      calculate();
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const calculate = () => {
    let computation: number | undefined;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }

    if (computation !== undefined) {
      setCurrentOperand(computation.toString());
    }
    setOperation("");
    setPreviousOperand("");
  };

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation("");
  };

  const enableDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`calculator-grid ${darkMode ? "dark-mode" : ""}`}>
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={clear}>
        AC
      </button>
      <button onClick={() => appendNumber("1")}>1</button>
      <button onClick={() => appendNumber("2")}>2</button>
      <button onClick={() => appendNumber("3")}>3</button>
      <button onClick={() => appendNumber("4")}>4</button>
      <button onClick={() => appendNumber("5")}>5</button>
      <button onClick={() => appendNumber("6")}>6</button>
      <button onClick={() => appendNumber("7")}>7</button>
      <button onClick={() => appendNumber("8")}>8</button>
      <button onClick={() => appendNumber("9")}>9</button>
      <button onClick={() => appendNumber("0")}>0</button>
      <button onClick={() => chooseOperation("+")}>+</button>
      <button onClick={() => chooseOperation("-")}>-</button>
      <button onClick={() => chooseOperation("*")}>*</button>
      <button onClick={() => chooseOperation("÷")}>÷</button>
      <button onClick={calculate}>=</button>
      <DarkModeButton enableDarkMode={enableDarkMode} />
    </div>
  );
}

export default CalculatorGrid;
