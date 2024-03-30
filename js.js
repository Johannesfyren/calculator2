const displayContent = document.querySelector('.display');
const currentInput = document.querySelector('.current-input');
const runningResult = document.querySelector('.running-result');
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
let result='';


function operate(firstNumber, secondNumber, operator){
    switch (operator){
        case '+': result = add(firstNumber,secondNumber).toFixed(2);
        break;
        case '-': result = subtract(firstNumber,secondNumber).toFixed(2);
        break;
        case '*': result = multiply(firstNumber,secondNumber).toFixed(2);
        break;
        case '/': result = divide(firstNumber,secondNumber).toFixed(2);
        break;
        default:"NaN";
    }
    runningResult.textContent = result;
    // firstNumber=result;
    // firstNumberStored = false;
    // secondNumber = '';
    
}

function add (a,b){
    return Number(a)+Number(b);
}
function subtract (a,b){
    return Number(a)-Number(b);
}
function multiply (a,b){
    return Number(a)*Number(b);
}
function divide (a,b){
    return Number(a)/Number(b);
}




button1Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '1';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '1';
        currentInput.textContent = secondNumber;
    } 
});
button2Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '2';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '2';
        currentInput.textContent = secondNumber;
    } 
});
button3Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '3';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '3';
        currentInput.textContent = secondNumber;
    } 
});
button4Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '4';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '4';
        currentInput.textContent = secondNumber;
    } 
});
button5Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '5';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '5';
        currentInput.textContent = secondNumber;
    } 
});
button6Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '6';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '6';
        currentInput.textContent = secondNumber;
    } 
});
button7Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '7';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '7';
        currentInput.textContent = secondNumber;
    } 
});
button8Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '8';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '8';
        currentInput.textContent = secondNumber;
    } 
});
button9Pressed.addEventListener("click", ()=> {
    if (!firstNumberStored){
        firstNumber += '9';
        currentInput.textContent = firstNumber;
    }
    if (firstNumberStored && !secondNumberStored){
        secondNumber += '9';
        currentInput.textContent = secondNumber;
    } 
});


buttonAddPressed.addEventListener("click", ()=>{
    operator ='+';
    firstNumberStored = true;
});

buttonMinusPressed.addEventListener("click", ()=>{
    operator ='-';
    firstNumberStored = true;
});
buttonMultiplyPressed.addEventListener("click", ()=>{
    operator ='*';
    firstNumberStored = true;
});
buttonDividePressed.addEventListener("click", ()=>{
    operator ='/';
    firstNumberStored = true;
});

buttonClearPressed.addEventListener("click", ()=>{
    firstNumber='', secondNumber='', operator ='';
    firstNumberStored = false;
    secondNumberStored = false;
    currentInput.textContent = '';
});
buttonEqualPressed.addEventListener("click", ()=>{
    if(!secondNumber){
        alert("you forgot a second number");
    }else{
         operate(firstNumber,secondNumber,operator);
    secondNumber = '';
    currentInput.textContent ='';
    firstNumber=result;
    };
   
});