import { inputBtns, clearBtn } from "./src/selectors.js";
import addDecimal from "./src/addDecimal.js";
import useOperator from "./src/useOperator.js";
import addNumberValue from "./src/addNumberValue.js";
import { resetAll } from "./src/values.js";


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

clearBtn.addEventListener("click", resetAll);
