function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1 = Number();
let operator;
let num2 = Number();

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

const acButton = document.querySelector(".ac-button");
const numberButtons = document.querySelectorAll(".number-button");
const divideButton = document.querySelector(".divide-button");
const timesButton = document.querySelector(".times-button");
const minusButton = document.querySelector(".minus-button");
const equalsButton = document.querySelector(".equals-button");
const plusButton = document.querySelector(".plus-button");

let displayNumberArray = [];
let displayValue = 0;

function populateDisplay(e) {
    const displayText = document.querySelector(".display-text");
    if (displayText.textContent === "0" && e.target.textContent === "0") {
        return;
    } else {
        displayNumberArray.push(e.target.textContent);
        let displayNumberString = displayNumberArray.join("");
        displayText.textContent = displayNumberString;
        displayValue = Number(displayNumberString);
    };
}

numberButtons.forEach((button) => {
    button.addEventListener("click", populateDisplay);
}); 