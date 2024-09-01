import { useState, useRef, useCallback } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 

  const [result, setResult] = useState(0); 
  const [inputNull, setInputNull] = useState(true);
  const [calculation, setCalculation] = useState("");
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
    setCalculation(`${result} + ${inputRef.current.value}`);
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
    setCalculation(`${result} - ${inputRef.current.value}`);
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
    setCalculation(`${result} × ${inputRef.current.value}`);
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
    setCalculation(`${result} ÷ ${inputRef.current.value}`);
  };
 
  function reset(e) { 
    e.preventDefault(); 
    if (inputNull) {
      inputRef.current.value = null;
      setResult(0); 
      setCalculation("");
    } else {
      inputRef.current.value = null;
      setInputNull(true);
    }
  }; 

  function negative(e) { 
    e.preventDefault(); 
  	inputRef.current.value = Number(inputRef.current.value) * -1;
    inputHandler();
  }; 

  function percentage(e) { 
    e.preventDefault(); 
  	inputRef.current.value = Number(inputRef.current.value) / 100;
    inputHandler();
  }; 

  function inputHandler() { 
    const inputValue = Number(inputRef.current.value);
    setInputNull(inputValue === null || inputValue === '');
  }; 

  const inputVal = useCallback( (val, e) => {
    e.preventDefault(); 
  	inputRef.current.value = inputRef.current.value + val;
    inputHandler();
  }, []);

  return ( 
    <div className="App"> 
      <div> 
        <h2>Simplest Working Calculator</h2> 
      </div> 
      <div id="calculator">
        <form> 
          <div>
            <p id="calculation"><span>&#8203;</span>{calculation}</p>
            <h1 ref={resultRef}> {result} </h1> 
          </div>
          <input
              pattern="[0-9]" 
              ref={inputRef} 
              type="number" 
              placeholder="Type a Number" 
              onInput={inputHandler}
            /> 
          <div className="main-content">
            <section>
              <div className="container modifiers">
                <button onClick={reset}>{inputNull ? "AC" : "C"}</button> 
                <button onClick={negative}>+/-</button> 
                <button onClick={percentage}>%</button> 
              </div>
              <div className="container num-pad">
                <button onClick={(e) => inputVal(1, e)}>1</button> 
                <button onClick={(e) => inputVal(2, e)}>2</button> 
                <button onClick={(e) => inputVal(3, e)}>3</button> 
                <button onClick={(e) => inputVal(4, e)}>4</button> 
                <button onClick={(e) => inputVal(5, e)}>5</button> 
                <button onClick={(e) => inputVal(6, e)}>6</button> 
                <button onClick={(e) => inputVal(7, e)}>7</button> 
                <button onClick={(e) => inputVal(8, e)}>8</button> 
                <button onClick={(e) => inputVal(9, e)}>9</button> 
                <button 
                  onClick={(e) => inputVal(0, e)}
                  className="zero-key"
                >0</button> 
                <button onClick={(e) => inputVal(".", e)}>.</button> 
              </div>
            </section>
            <section className="container operators">
              <button onClick={plus}>+</button> 
              <button onClick={minus}>-</button> 
              <button onClick={times}>×</button> 
              <button onClick={divide}>÷</button> 
              <button className="filler"></button>
            </section>
          </div>
        </form> 
      </div>
    </div> 
  ); 
} 
 
export default App; 