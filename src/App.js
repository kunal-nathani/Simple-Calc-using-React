
import { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react-dom';
function App() {
  const [Calc,setCalc] = useState({
    current:0 ,
    total:0 ,
    isInitial:true,
    preOp : ""
  });
  function Calculator(){
    function handleNumber(value){
      let newValue = value;
      if(!Calc.isInitial){
        newValue =  Calc.current + value;
      }
      setCalc({current:newValue, total: Calc.total , isInitial:false, preOp: Calc.preOp});
    }
    function handleOperator(value){
      const total = doCalculation();

      setCalc({current: total.toString(),total : total.toString(), isInitial:true , preOp: value});
    }
    function doCalculation(){
      let total = parseInt(Calc.total);
  
      switch(Calc.preOp){
        case "+":
        total += parseInt(Calc.current);
          break;
        case "-":
          total -= parseInt(Calc.current);
          break;
        case "*":
          total *= parseInt(Calc.current);
          break;
        case "/":
          total /= parseInt(Calc.current);
          break;
        default:
          total = parseInt(Calc.current);
      }
      return total;
    }
    function renderDisplay(){
      return Calc.current;
    }
    function handleClear(){
      setCalc({
        current:0 ,
        total:0 ,
        isInitial:true,
        preOp : ""
      });
    }
    
    return(
      <div className="calculator">
        <div className="display">{renderDisplay()}</div>
        <CalcButton value="9" onClick={handleNumber}/>
        <CalcButton value="8" onClick={handleNumber}/>
        <CalcButton value="7" onClick={handleNumber}/>
        <CalcButton value="/" className="operator" onClick={handleOperator}/>

        <CalcButton value="6" onClick={handleNumber}/>
        <CalcButton value="5" onClick={handleNumber}/>
        <CalcButton value="4" onClick={handleNumber}/>
        <CalcButton value="*" className="operator" onClick={handleOperator}/>

        <CalcButton value="3" onClick={handleNumber}/>
        <CalcButton value="2" onClick={handleNumber}/>
        <CalcButton value="1" onClick={handleNumber}/>
        <CalcButton value="+" className="operator" onClick={handleOperator}/>
      
        <CalcButton value="C" onClick={handleClear}/>
        <CalcButton value="0" onClick={handleNumber}/>
        <CalcButton value="=" onClick={handleOperator}/>
        <CalcButton value="-" className="operator" onClick={handleOperator}/>
      
      </div>
    );
    function CalcButton(props){
      return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
    }
  }
  ReactDOM.render(<div className="app-container"><Calculator/></div>, document.getElementById("root"));
}
    


export default App;
