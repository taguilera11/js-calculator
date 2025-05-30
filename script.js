const calculatorDisplay = document.querySelector("h1");
const inputBtns =  document.querySelectorAll("button");
const clearBtn = document.querySelector("clear-btn");

let displayValue = 0;
calculatorDisplay.textContent = displayValue;


inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", ()=> addNumberValue(inputBtn.value));
    }

    
});


function addNumberValue(value) {
    if (calculatorDisplay.textContent === "0") {
        calculatorDisplay.textContent = value;
    } else {
        calculatorDisplay.textContent += value;
    }
}
