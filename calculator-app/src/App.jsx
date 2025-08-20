import React from "react";
import { useState } from "react";

function App(){
   const [input, setInput]  = useState("");
   const [firstValue, setFirstValue] = useState(null);
   const [operator, setOperator ] = useState(null);

   const handleNumber= (num) =>{
    setInput(input+num);
   }

   const handleOperator = (op) => {
      setFirstValue(Number(input))
      setOperator(op);
      setInput("");
   }

   const handleEqual = () =>{
    const secondValue = Number(input);
    let result;

    switch (operator) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "*":
        result = firstValue * secondValue;
        break;
      case "/":
        result = firstValue / secondValue;
        break;
      default:
        return;
    }
    setInput(result.toString()); // result display me dikhado
    setFirstValue(null);
    setOperator(null);
   }

   const handleClear = () => {
    setInput("");
    setFirstValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator" style={{ textAlign:"center", marginTop:"50px" , marginLeft : "550px", display : "flex-col" , alignItems : "center", justifyContent : "center"}}>
      <h1>Mera Calculator!</h1>
      {/* Display */}
      <div className="display" style={
        {border:"1px solid black",
          // width: "200px",
          margin:"10px auto",
          padding:"10px",
          fontSize:"20px",
          textAlign:"right"
        }
      }>
        {input || "0"}
      </div>
      {/* Buttons */}
      <div style={{ width:"200px", margin:"auto"}}>
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("/")}>/</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("*")}>x</button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button onClick={() => handleNumber("0")}>0</button>
        <button disabled>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleOperator("+")}>+</button>
        <div>
          <button onClick={handleClear} style={{width:"100%", background:"red" , color:"white"}}>C</button>
        </div>
      </div>
    </div>
  )
}


export default App