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

let num1;
let operator;
let num2;

function operate(num1, operator, num2) {
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

const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");

let displayNumberArray = [];
let displayValue = 0;
let expression = {};

function populateDisplay(e) {
    const displayText = document.querySelector(".display-text");
    let operatorButtonsArray = Array.from(operatorButtons);
    let activatedOperators = operatorButtonsArray.filter(btn => btn.className === "operator-button activated");
    if (displayText.textContent === "0" && e.target.textContent === "0") {
        return;
    } else if (activatedOperators[0] !== undefined) {
        for (const btn of operatorButtons) {
            btn.classList.remove("activated");
        };
        displayNumberArray = [];
        displayNumberArray.push(e.target.textContent);
        let displayNumberString = displayNumberArray.join("");
        displayText.textContent = displayNumberString;
        displayValue = Number(displayNumberString);
    } else if (expression.secondNumber !== undefined) {
        expression = {};
        displayNumberArray = [];
        displayNumberArray.push(e.target.textContent);
        let displayNumberString = displayNumberArray.join("");
        displayText.textContent = displayNumberString;
        displayValue = Number(displayNumberString);
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

function callOperator(e) {
    num1 = displayValue;
    switch (e.target.textContent) {
        case "+":
            operator = "+";
            break;
        case "−":
            operator = "-";
            break;
        case "×":
            operator = "*";
            break;
        case "÷":
            operator = "/";
            break;
    }
    e.target.classList.add("activated");
    expression.firstNumber = num1;
    expression.operator = operator;
}

operatorButtons.forEach((button) => {
    button.addEventListener("click", callOperator);
});

const equalsButton = document.querySelector(".equals-button");

function callEquals() {
    num2 = displayValue;
    expression.secondNumber = num2;
    if (expression.operator === "/" && expression.secondNumber === 0) {
        const displayText = document.querySelector(".display-text");
        displayText.textContent = "Err: cannot divide by 0";
    } else {
        let solution = operate(expression.firstNumber, expression.operator, expression.secondNumber);
        const displayText = document.querySelector(".display-text");
        displayText.textContent = solution.toString();
        displayValue = solution;
    }
}

equalsButton.addEventListener("click", callEquals);

const acButton = document.querySelector(".ac-button");

function callAC() {
    displayNumberArray = [];
    expression = {};
    displayValue = 0;
    for (const btn of operatorButtons) {
        btn.classList.remove("activated");
    };
    const displayText = document.querySelector(".display-text");
    displayText.textContent = "0";
}

acButton.addEventListener("click", callAC);