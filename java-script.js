
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
    return a/b; 
};

let numB1 = null;
let numB2 = null;
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
