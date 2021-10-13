
let displayValue = "";
const output = document.querySelector('.output');
const btn0 = document.querySelector('.n0');
const btn1 = document.querySelector('.n1');
const btn2 = document.querySelector('.n2');
const btn3 = document.querySelector('.n3');
const btn4 = document.querySelector('.n4');
const btn5 = document.querySelector('.n5');
const btn6 = document.querySelector('.n6');
const btn7 = document.querySelector('.n7');
const btn8 = document.querySelector('.n8');
const btn9 = document.querySelector('.n9');

function add(a, b){
    return (a + b);
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(a, operator, b){

    
}

function setDisplay(){
    output.textContent = (displayValue);
}



btn0.addEventListener('click', function(){
   displayValue += "0";
   setDisplay();

});

btn1.addEventListener('click', function(){
    displayValue += "1";
    setDisplay();

});

btn2.addEventListener('click', function(){
    displayValue += "2";
    setDisplay();

});

btn3.addEventListener('click', function(){
    displayValue += "3";
   setDisplay();
});

btn4.addEventListener('click', function(){
    displayValue += "4";
   setDisplay();
});

btn5.addEventListener('click', function(){
    displayValue += "5";
   setDisplay();
});

btn6.addEventListener('click', function(){
    displayValue += "6";
   setDisplay();
});

btn7.addEventListener('click', function(){
    displayValue += "7";
   setDisplay();
});

btn8.addEventListener('click', function(){
    displayValue += "8";
   setDisplay();
});

btn9.addEventListener('click', function(){
    displayValue += "9";
   setDisplay();
});




