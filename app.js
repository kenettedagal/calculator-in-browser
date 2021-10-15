
let displayValue = "";
let firstValue = "";
let secondValue = "";
let operator = "";
let equalBtnPressed = false;
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
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const equalBtn = document.querySelector('.equals');



function add(a, b){
    return (Number(a) + Number(b));
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
    switch (operator) {
        case "add":
            displayValue = add(Number(a), Number(b));
            setDisplayValue();
            // storeFirstValue();
            // clearSecondValue();
            
    }    
    
}
let operatorCount = 0;
//user inputs
    //store value 1
    //press operator
    //store value 2 after pressing = or any operator
    // call operate
    //display the value
function storeFirstValue(){
    firstValue = displayValue;
}
function storeSecondValue(){
    secondValue = displayValue;
}
function clearFirstValue(){
    firstValue = "";
}
function clearSecondValue(){
    secondValue = "";
}
function clearOperator(){
    operator = "";
}
function incrementOperatorCount(){
    operatorCount++;
}
function resetOperatorCount(){
    operatorCount = 0;
}
function clearDisplayValue(){
    displayValue = "";
    setDisplayValue();
}
function setDisplayValue(){
    output.textContent = (displayValue);
}
// input num1 
// press +
//store num1 into var a
//clear display
//input num 2
//press + 
// add var a + b
//show sum
//store sum in var a
//if press digit
//remove the display
// show what pressed


// OPERATORS
addBtn.addEventListener('click', function(){
    operator += "add"
    storeFirstValue();
    clearDisplayValue();

    
});
subtractBtn.addEventListener('click', function(){
    operator += "sub";
    
    
});
multiplyBtn.addEventListener('click', function(){
    operator += "mul";
    
    
});
divideBtn.addEventListener('click', function(){
    operator += "div";
    
    
});
equalBtn.addEventListener('click', function(){
    storeSecondValue();
    operate(firstValue, operator, secondValue);
    clearFirstValue();
    clearSecondValue();
    equalBtnPressed = true;
    clearOperator();
    
});

// DIGITS
btn0.addEventListener('click', function(){
   if(equalBtnPressed) {
       equalBtnPressed = false;
       clearDisplayValue();
   }
    displayValue += "0";
   setDisplayValue();

});

btn1.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "1";
    setDisplayValue();

});

btn2.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "2";
    setDisplayValue();

});

btn3.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "3";
   setDisplayValue();
});

btn4.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "4";
   setDisplayValue();
});

btn5.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "5";
   setDisplayValue();
});

btn6.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "6";
   setDisplayValue();
});

btn7.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "7";
   setDisplayValue();
});

btn8.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "8";
   setDisplayValue();
});

btn9.addEventListener('click', function(){
    if(equalBtnPressed) {
        equalBtnPressed = false;
        clearDisplayValue();
    }
    displayValue += "9";
   setDisplayValue();
});




