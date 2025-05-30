const calculatorDisplay = document.querySelector("h1");
const inputBtns =  document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let awaitingNextValue = false;
let operatorValue = "";


inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", ()=> addNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains("operator")) {
        inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
    }
    else if (inputBtn.classList.contains("decimal")) {
        inputBtn.addEventListener("click", () => addDecimal());
    }
});


function addNumberValue(value) {
    if (awaitingNextValue) {
        calculatorDisplay.textContent = value;
        awaitingNextValue = false;
    } else {
        const firstValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = 
            firstValue === "0" ? value : firstValue + value;
    }
}

const calculate = {
    "/" : (firstValue, secondValue) => firstValue / secondValue,
    "*" : (firstValue, secondValue) => firstValue * secondValue,
    "+" : (firstValue, secondValue) => firstValue + secondValue,
    "-" : (firstValue, secondValue) => firstValue - secondValue,
    "=" : (firstValue, secondValue) => secondValue
};

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    if (operatorValue && awaitingNextValue) {
        operatorValue = operator;
    }

    else if(!operatorValue) {
        firstValue = currentValue;
    } else {
        const calculation = calculate[operatorValue](firstValue, currentValue);
        const calculationRounded = Number.isInteger(calculation) ? calculation : calculation.toFixed(2);
        calculatorDisplay.textContent = calculationRounded;
        firstValue = calculation;
    }

    awaitingNextValue = true;
    operatorValue = operator;
};

clearBtn.addEventListener("click", resetAll);

function resetAll() {
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

function addDecimal() {
    if (awaitingNextValue) {
        return;
    }
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
        
}