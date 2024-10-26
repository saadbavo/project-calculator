
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
let displayValue= 0;
let displayArea = document.getElementById('result');
const numbutton = document.querySelectorAll(".num");
numbutton.forEach(num =>{
    addEventListener('click' , (e) =>{
        updateDisplay(e)
    })
});
let updateDisplay = (e) =>{
    displayValue = e.target.id;
    displayArea.innerHTML = displayValue;
}; 

let idValue = (e) =>{
    id = e.target.id;
};

numbutton.forEach(num => {
    addEventListener('click' , update =>{
        if(num1 === null){
            return num1 = idValue;
        }
    } )
    console.log(num1)
})
