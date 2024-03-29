const displayContent = document.querySelector('.display');
const button1Pressed = document.querySelector('#button1');
const button2Pressed = document.querySelector('#button2');
const button3Pressed = document.querySelector('#button3');
const button4Pressed = document.querySelector('#button4');
const button5Pressed = document.querySelector('#button5');
const button6Pressed = document.querySelector('#button6');
const button7Pressed = document.querySelector('#button7');
const button8Pressed = document.querySelector('#button8');
const button9Pressed = document.querySelector('#button9');
const buttonAddPressed = document.querySelector('#button-plus');
const buttonMinusPressed = document.querySelector('#button-minus');
const buttonMultiplyPressed = document.querySelector('#button-multiply');
const buttonDividePressed = document.querySelector('#button-divide');
const buttonClearPressed = document.querySelector('#button-clear');
const buttonEqualPressed = document.querySelector('#button-equals');


let firstNumber='', secondNumber='', operator;
let firstNumberStored = false;
let secondNumberStored = false;


function operate(firstNumber, secondNumber, operator){
    add (firstNumber,secondNumber);
}

function add (a,b){
    return a+b;
}
function subtract (a,b){
    return a-b;
}
function multiply (a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}




button1Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '1';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '1';
        displayContent.textContent = secondNumber;
    } 
});


button2Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '2';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '2';
        displayContent.textContent = secondNumber;
    } 
});
button3Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '3';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '3';
        displayContent.textContent = secondNumber;
    } 
});
button4Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '4';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '4';
        displayContent.textContent = secondNumber;
    } 
});
button5Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '5';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '5';
        displayContent.textContent = secondNumber;
    } 
});
button6Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '6';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '6';
        displayContent.textContent = secondNumber;
    } 
});
button7Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '7';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '7';
        displayContent.textContent = secondNumber;
    } 
});
button8Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '8';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '8';
        displayContent.textContent = secondNumber;
    } 
});
button9Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '9';
        displayContent.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '9';
        displayContent.textContent = secondNumber;
    } 
});


buttonAddPressed.addEventListener("click", ()=>{operator ='+'});
buttonMinusPressed.addEventListener("click", ()=>{operator ='-'});
buttonMultiplyPressed.addEventListener("click", ()=>{operator ='*'});
buttonDividePressed.addEventListener("click", ()=>{operator ='/'});

buttonClearPressed.addEventListener("click", ()=>{operator ='+'});
buttonEqualPressed.addEventListener("click", ()=>{operator ='+'});