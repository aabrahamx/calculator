import React from "react";
import { Button } from "../Button/Button.js";
import { changeToNumber, display } from "../../helpers/formatters";
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
        btnNames: [
          "+",
          "-",
          "x",
          "/",
          "=",
          "C",
          ".",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ],
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(eTargetValue) {
      const operators = this.state.operators;
      operators.includes(eTargetValue)
        ? this.operate(eTargetValue)
        : this.acceptInput(eTargetValue);
    }

    acceptInput(number) {
      display(null);
      display(number);
      this.storeInput(number);
    }

    operate(operator) {
      if (operator === "=") {
        display(null);
        const calculated = this.calculate();
        display(calculated);
        this.setState({
          calculatedNumber: calculated,
          primaryNumber: "",
          secondaryNumber: "",
          workingOperator: "",
        });
      } else if (operator === "C") {
        display(null);
        this.setState({
          primaryNumber: "",
          secondaryNumber: "",
          workingOperator: "",
        });
      } else {
        display(null);
        this.setState({
          workingOperator: operator,
        });
      }
    }

    storeInput(val) {
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
      return result.toFixed(1);
    }

    render() {
      return (
        <div className="cont">
          <div className="display"></div>
          {this.state.btnNames.map((name) => {
            return (
              <Button
                btnValue={name}
                onClick={(val) => this.handleClick(val)}
              ></Button>
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
