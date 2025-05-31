import { calculatorDisplay } from "./selectors.js";
import { getAwaitingNextValue } from "./values.js";

export default function addDecimal() {
    if (getAwaitingNextValue()) {
        return;
    }
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
        
}