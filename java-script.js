
function add(a, b){
    return a + b ;

};
function subtract(a , b){
    return a - b;

};
function multiply(a, b){
    return a*b
};
function divide(a, b){
    if (b === 0) {
        return "Error"; 
    }
    return a/b; 
};

let numB1 = null;
let numB2 = null;
let operator = "";
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Invalid Operator";
    }
};

const display = document.querySelector(".display");
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;




const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

    

    if (!isNaN(value) || value === '.') {
        // Number or decimal point
        if (currentOperator) {
            secondOperand += value;
            display.textContent = secondOperand;
        } else {
            firstOperand += value;
            display.textContent = firstOperand;
        }
    } else if (value === 'Clear') {
        firstOperand = '';
        secondOperand = '';
        currentOperator = null;
        display.textContent = '0';
    } else if (value === '=') {
        if (firstOperand && secondOperand && currentOperator) {
            const result = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));
            display.textContent = result;
            firstOperand = result.toString();
            secondOperand = '';
            currentOperator = null;
        }
    } else {
        // Handle operator input
        if (currentOperator && secondOperand) {
            // If there's already an operator and second operand, calculate the result
            const result = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));
            display.textContent = result;
            firstOperand = result.toString();
            secondOperand = '';
        }
        // Operator
        currentOperator = value;
    }
});
});
