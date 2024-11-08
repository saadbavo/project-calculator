
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
let operator = "";
function operate(num1, num2, operator){
    if (operator === "+"){
   return add(num1, num2)}
   else if(operator ==="-"){
    return subtract(num1, num2);
   }
   else if(operator=== "x"){
    return multiply([num1,num2])
   }
   else if(operator === "/") {
    return divide(num1, num2)
   }
};



const nums = document.querySelectorAll(".num");
nums.forEach(num => {
    num.addEventListener("click", ()=> {
        const dis = document.querySelector(".display");
        dis.textContent = num.id
    });
    num.addEventListener('click', ()=>{
        if (num1 ==null){
            return num1 = num.id;
        }
        else if (num2 == null){
            return num2 = num.id
        };
    });
});