
function add(a, b){
    return a + b ;

};
function subtract(a , b){
    return a - b;

};
function multiply(arr){
    return arr.reduce((product, current) =>product* current)
};
function divide(a, b){
    return a/b; 
};

let num1 = null;
let num2 = null;
let operator = " ";
function operate(num1, num2, operator){
    if (operator === "+"){
   return add(num1, num2)};
};

let updateDisplay = (e) =>{
    displayValue = e.target.id;
    displayArea.innerHTML = displayValue;
}; 

const nbutton = document.querySelectorAll(".num");
nbutton.forEach(num => {
    addEventListener('click' , update =>{
        if(num1 == null){
            return num1 = nbutton.id;
        }
    } )
    console.log(num1)
})
