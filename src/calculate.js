const calculate = {
    "/" : (firstValue, secondValue) => firstValue / secondValue,
    "*" : (firstValue, secondValue) => firstValue * secondValue,
    "+" : (firstValue, secondValue) => firstValue + secondValue,
    "-" : (firstValue, secondValue) => firstValue - secondValue,
    "=" : (firstValue, secondValue) => secondValue
};

export default calculate;