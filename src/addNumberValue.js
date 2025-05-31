import { getAwaitingNextValue, setAwaitingNextValue } from "./values.js";

import { calculatorDisplay } from "./selectors.js";

export default function addNumberValue(value) {
    if (getAwaitingNextValue()) {
        calculatorDisplay.textContent = value;
        setAwaitingNextValue(false);
    } else {
        const firstValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = 
            firstValue === "0" ? value : firstValue + value;
    }
}