import { calculatorDisplay } from "./selectors.js";

let firstValue = 0;
let awaitingNextValue = false;
let operatorValue = "";

export function getFirstValue() {
    return firstValue;
}

export function setFirstValue(value) {
    firstValue = value;
}

export function getAwaitingNextValue() {
    return awaitingNextValue;
}

export function setAwaitingNextValue(value) {
    awaitingNextValue = value;
}

export function getOperatorValue() {
    return operatorValue;
}

export function setOperatorValue(value) {
    operatorValue = value;
}

export function resetAll() {
    if (firstValue !== 0 && !awaitingNextValue) {
          awaitingNextValue = true;
        calculatorDisplay.textContent = "0";
    } else {
        firstValue = 0;
        awaitingNextValue = false;
        operatorValue = "";
        calculatorDisplay.textContent = "0";
    }
}