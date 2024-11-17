
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

function updateDisplay(numb){
    const dis = document.querySelector(".display");
    let currentNm =+numb
    dis.textContent = currentNm

}


const nums = document.querySelectorAll(".num");
nums.forEach(num => {
    num.addEventListener("click", () => {
        updateDisplay(num.id)

    });
    num.addEventListener('click', ()=>{
        if (operator ==""){
            return numB1 = parseFloat(num.id);
        }
        else if (numB2 == null){
            return numB2 = num.id
        };
    });
});
