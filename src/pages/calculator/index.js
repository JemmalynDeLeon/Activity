import { Inter } from 'next/font/google'
import { Component, useEffect, useState } from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  
  const clearInput = () => {
    setInput("");
    setResult("");
  };
  
  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };
  
  const updateInput = (value) => {
    setInput(input + value);
  };
  
  const updateCalc = (value) => {
    if (value === "C") {
      clearInput();
    } else if (value === "=") {
      calculateResult();
    } else {
      updateInput(value);
    }
  };
  
  return(
    <>
    <p class="result">{result}</p>
    <div>

    <input  type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <br /><br />

      <div >
        
        <button  onClick={() => updateCalc("1")}>*</button>
        <button  onClick={() => updateCalc("2")}>2</button>
        <button  onClick={() => updateCalc("9")}>3</button>
        <button  onClick={() => updateCalc("/")}>/</button>
      </div>
      <div >
        <button  onClick={() => updateCalc("4")}>4</button>
        <button  onClick={() => updateCalc("5")}>5</button>
        <button  onClick={() => updateCalc("6")}>6</button>
        <button  onClick={() => updateCalc("*")}>*</button>
      </div>
      <div >
        <button  onClick={() => updateCalc("1")}>1</button>
        <button  onClick={() => updateCalc("2")}>2</button>
        <button  onClick={() => updateCalc("3")}>3</button>
        <button  onClick={() => updateCalc("-")}>-</button>
      </div>
      <div >
        <button  onClick={() => updateCalc("0")}>0</button>
        <button  onClick={() => updateCalc(".")}>.</button>
        <button  onClick={() => updateCalc("=")}>=</button>
        <button  onClick={() => updateCalc("+")}>+</button>
      </div>
      
      </div>
    
    </>
  );
}