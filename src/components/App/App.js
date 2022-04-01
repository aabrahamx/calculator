import React from "react";
import { Button } from "../Button/Button.js";
import { Display } from "../Display/Display.js";
import { inputValues as btnValues } from "../../helpers/inputValues.js";
import { changeToNumber } from "../../helpers/formatters";
import "./App.css";

function App() {
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        primaryNumber: "",
        secondaryNumber: "",
        workingOperator: "",
        calculatedNumber: "", // the value of primary & secondary
        operators: ["+", "-", "x", "/", "=", "C"],
        NumberToDisplay: null
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
      if(num) {
        this.setState({ NumberToDisplay: num })
      } else {
        this.setState({ NumberToDisplay: null })
      }
    }

    handleOperation(operator) {
      if (operator === "=") {
        const calculated = this.calculate();
        this.handleDisplay(calculated);
        this.setState({
          calculatedNumber: calculated,
          primaryNumber: "",
          secondaryNumber: "",
          workingOperator: "",
        });
      } else if (operator === "C") {
        this.handleDisplay();
        this.setState({
          primaryNumber: "",
          secondaryNumber: "",
          workingOperator: "",
        });
      } else {
        // [+, -, /, *]
        this.handleDisplay();
        this.setState({
          workingOperator: operator,
        });
      }
    }

    storeNumber(val) {
      // concatenates str as client inputs
      const operating = this.state.workingOperator;
      if (!operating) {
        let primary = this.state.primaryNumber + val;
        this.setState({ primaryNumber: primary });
      } else if (operating) {
        let secondary = this.state.secondaryNumber + val;
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
      console.log("result: " + result);
      return result.toFixed(1);
    }

    render() {
      return (
        <div className="cont">

          <Display
           className="display"
           number={ this.state.NumberToDisplay } 
           />

          {btnValues[0].map((obj) => {
            return (
              <Button
                btnValue={obj.value}
                className={`btn${obj.name}`}
                onClick={this.handleClick}
              />
            );
          })}
          {btnValues[1].map((obj) => {
            return (
              <Button
                btnValue={obj.value}
                className={`btn${obj.name}`}
                onClick={this.handleClick}
              />
            );
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
