import { calculatorDisplay } from "./selectors.js";
import calculate from "./calculate.js";
import {getAwaitingNextValue, setAwaitingNextValue, getOperatorValue, setOperatorValue, getFirstValue, setFirstValue } from "./values.js";

export default function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    if (getOperatorValue() && getAwaitingNextValue()) {
        setOperatorValue(operator);
    }

    else if(!getOperatorValue()) {
        setFirstValue(currentValue);
    } else {
        const calculation = calculate[getOperatorValue()](getFirstValue(), currentValue);
        const calculationRounded = Number.isInteger(calculation) ? calculation : calculation.toFixed(2);
        calculatorDisplay.textContent = calculationRounded;
        setFirstValue(calculation);
    }

    setAwaitingNextValue(true);
    setOperatorValue(operator);
};