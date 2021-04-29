//Math functions
function add(num1,num2) {
    return num1+num2;
}

function substract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}

function percent(num) {
    return num/100;
}

//Make an operation on given numbers
function operate(num1,operator,num2) {
    if(operator=="+") {
        return add(num1,num2);
    }
    if(operator=="-") {
        return substract(num1,num2);
    }
    if(operator=="*") {
        return multiply(num1,num2);
    }
    if(operator=="/") {
        return divide(num1,num2);
    }
    //Im not putting percent and squareroot here, as they
    //change only one and currently given number
}

//Single operations (like sqrt or just equal)
function singleOperation(operator) {
    if(operator=="%") {
        return percent(currentNumber);
    }
    if(operator=="sqrt") {
        return Math.sqrt(currentNumber);
    }
    if(operator=="+/-") {

    }
    if(operator=="=") {
        secondNumber = parseFloat(currentNumber);
        return operate(firstNumber, globalOperator, secondNumber);
    }
}


//Populates the display with given numbers
function populate(num) {
    let text = display.textContent;
    //If current number is 0, it will replace it
    if(text=="0"&&num!=",") text="";
    display.textContent = `${text}${num}`;

    //Disabling "," button
    if(num==",") floatButton.disabled = true;
    //Storing currently displayed number
    currentNumber = display.textContent;
}

//Clears display
function clearDisplay() {
    display.textContent = "0";
    floatButton.disabled = false;
}

//Query selectors
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#AC');
const floatButton = document.querySelector('#float');
const operationButtons = document.querySelectorAll('.operation');
const singleOperationButtons = document.querySelectorAll('.singleOperation');
//Global variables
let currentNumber = 0;
let globalOperator;

let firstNumber;
let secondNumber;

//Displaying numbers when clicker
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        populate(button.textContent);
    });
});

//Clear button
clearButton.addEventListener('click', () => {
    clearDisplay();
    firstNumber = 0;
    secondNumber = 0;
    currentNumber = 0;
});

//Operation buttons listener
operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        currentNumber = display.textContent;
        globalOperator = button.id;
        firstNumber = parseFloat(currentNumber);
        clearDisplay();
    });
});

//Single operations buttons listener
singleOperationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = singleOperation(button.id);
    });
});