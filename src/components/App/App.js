import React from "react";
import { Button } from "../Button/Button.js";
import { Display } from "../Display/Display.js";
import { inputValues as btnValues } from "../../helpers/inputValues.js";
import { changeToNumber, calculatedFormatter } from "../../helpers/formatters";
import "./App.css";

function App() {
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        primaryNumber: "",
        secondaryNumber: "",
        workingOperator: "",
        calculatedNumber: "",
        operators: ["+", "-", "x", "/", "=", "C"],
        NumberToDisplay: null,
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick({ target }) {
      const operators = this.state.operators;
      if (operators.includes(target.value)) {
        this.handleOperation(target.value);
      } else {
        this.handleNumber(target.value);
      }
    }

    handleNumber(num) {
      this.handleDisplay(num);
      this.storeNumber(num);
    }

    handleDisplay(num) {
      if (num) {
        this.setState({ NumberToDisplay: num });
      } else {
        this.setState({ NumberToDisplay: null });
      }
    }

    handleOperation(operator) {
      if (operator === "=") {
        const calculated = this.calculate();
        this.setState({ calculatedNumber: calculated });
        this.handleDisplay(calculated);
        this.reset();
      } else if (operator === "C") {
        this.handleDisplay();
        this.reset();
      } /* -- [+, -, /, *] -- */ else {
        this.handleDisplay();
        this.setState({ workingOperator: operator });
      }
    }

    storeNumber(stringNumber) {
      const operating = this.state.workingOperator;
      if (!operating) {
        let primary = this.state.primaryNumber + stringNumber;
        this.setState({ primaryNumber: primary });
      } else if (operating) {
        let secondary = this.state.secondaryNumber + stringNumber;
        this.setState({ secondaryNumber: secondary });
      }
    }

    calculate() {
      const operator = this.state.workingOperator;
      const primary = changeToNumber(this.state.primaryNumber);
      const secondary = changeToNumber(this.state.secondaryNumber);
      let result;
      switch (operator) {
        case "+":
          result = primary + secondary;
          break;
        case "-":
          result = primary - secondary;
          break;
        case "x":
          result = primary * secondary;
          break;
        case "/":
          result = primary / secondary;
          break;
        default:
          console.log("error on calculate function");
      }
      return calculatedFormatter(result);
    }

    reset() {
      this.setState({
        primaryNumber: "",
        secondaryNumber: "",
        workingOperator: "",
      });
    }

    render() {
      return (
        <div className="cont">
          <Display className="display" number={this.state.NumberToDisplay} />
          {btnValues.map((arr) => {
            return arr.map((obj) => {
              return (
                <Button
                  btnValue={obj.value}
                  className={`btn${obj.name}`}
                  onClick={this.handleClick}
                />
              );
            });
          })}
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
