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

function squareroot(num) {
    return Math.sqrt(num);
}

//Make an operation on given numbers
function operate(num1,operator,num2) {
    if(operator="+") {
        return add(num1,num2);
    }
    if(operator="-") {
        return substract(num1,num2);
    }
    if(operator="*") {
        return multiply(num1,num2);
    }
    if(operator="/") {
        return divide(num1,num2);
    }
    //Im not putting percent and squareroot here, as they
    //change only one and currently given number
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

//Query selectors
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('#AC');
const floatButton = document.querySelector('#float');

//Global variables
let currentNumber = 0;

//Displaying numbers when clicker
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        populate(button.textContent);
    });
});

//Clear button
clearButton.addEventListener('click', () => {
    display.textContent = "0";
    floatButton.disabled = false;
});