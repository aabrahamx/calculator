import logo from "./logo.svg";
import { Number } from "./components/Number.js";
import "./App.css";
import React from "react";

function App() {
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        numberOne: '', 
        numberTwo: '', 
        operating: false, 
        currentOperator: '', 
        operators: ['+', '-', 'x', '/', '=', 'C'] 
      }
      this.handleClick = this.handleClick.bind(this);
    }

    changeToNumber(str) {
      let number;
      str.includes('.') ? number = parseFloat(str) : number = parseInt(str);
      return number;
    }

    operate(val) {
      const el = document.querySelector('.display');
      if(val === '=') {
        this.display(null);
        this.setState({operating: false})
        setTimeout(() => {
          const value = this.calculate();
          console.log(value);
          this.display(value);
        }, 100);
      } else {
        //stores operator type & initiates the secondary number
        this.setState({operating: true, currentOperator: val});
        el.innerHTML = '';
        setTimeout(() => {
          console.log(this.state.currentOperator)
        }, 100);
      }
    }
    calculate() {
      const operator = this.state.currentOperator;
      let result;
      const num1 = this.changeToNumber(this.state.numberOne);
      const num2 = this.changeToNumber(this.state.numberTwo);
      switch(operator) {
        case ('+'): 
          result = num1 + num2;
          break;
        case ('-'):
          result = num1 - num2;
          break;
        case ('x'):
          result = num1 * num2;
          break;
        case ('/'): 
        result = num1 / num2;
        break;
        default:
          console.log('error on calculate function');
      }
      return result;
    }

    store(val) {
      if(!this.state.operating) {
        let newValue = this.state.numberOne;
        newValue += val
        this.setState({numberOne: newValue});
        setTimeout( () => {console.log(`numberOne: ${this.state.numberOne}`)}, 100)
      } else if (this.state.operating) {
        let newValue = this.state.numberTwo;
        newValue += val;
        this.setState({numberTwo: newValue})
        setTimeout(() => {console.log(`numberTwo: ${this.state.numberTwo}`)}, 100);
      }
    }

    display(val) {
      const el = document.querySelector(".display");
      val === null ? el.innerHTML = '' : el.innerHTML += val;
    }

    handleClick(val) {
      const operators = this.state.operators;
      if(operators.includes(val)) { 
        this.operate(val); 
        console.log('operating..')
      } else { 
        this.display(val); 
        this.store(val); 
        console.log('storing..') 
      }  
    }

    render() {
      return (
        <div>
          <div className="row">
            <div className="column">
              <div className="display"></div>
            </div>
            <div className="column">
              <Number number="+" onClick={val => this.handleClick(val)} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Number number="7" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="8" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="9" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="-" onClick={val => this.handleClick(val)} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Number number="4" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="5" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="6" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="/" onClick={val => this.handleClick(val)} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Number number="1" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="2" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="3" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="x" onClick={val => this.handleClick(val)} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Number number="0" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="." onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="=" onClick={val => this.handleClick(val)} />
            </div>
            <div className="column">
              <Number number="C" onClick={val => this.handleClick(val)} />
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
