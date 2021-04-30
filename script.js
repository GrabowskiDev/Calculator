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
        return Number((Math.sqrt(currentNumber)).toFixed(fixedNumber));
    }
    if(operator=="+/-") {
        if(display.textContent.charAt(0)=="-") return display.textContent.slice(1);
        else return `-${display.textContent}`;
    }
    if(operator=="=") {
        secondNumber = parseFloat(currentNumber);
        operationsNumber = 0;
        return Number((operate(firstNumber, globalOperator, secondNumber)).toFixed(fixedNumber));
    }
}


//Populates the display with given numbers
function populate(num) {
    let text = display.textContent;
    //If current number is 0, it will replace it
    if(text=="0"&&num!=".") text="";
    if(text=="-0"&&num!=".") text="-";
    display.textContent = `${text}${num}`        ;

    //Disabling "," button
    if(num==".") floatButton.disabled = true;
    //Storing currently displayed number
    setCurrentNumber();
}

//Clears display
function clearDisplay() {
    display.textContent = "0";
    floatButton.disabled = false;
}

//Sets current number as displayed number
function setCurrentNumber() {
    currentNumber = parseFloat(display.textContent);
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
let operationsNumber = 0;

let firstNumber;
let secondNumber;
let result = false;
let fixedNumber = 4;

//Displaying numbers when clicker
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(result) {
            clearDisplay();
            result = false;
        }
        populate(button.textContent);
    });
});

//Clear button
clearButton.addEventListener('click', () => {
    clearDisplay();
    firstNumber = 0;
    secondNumber = 0;
    currentNumber = 0;
    globalOperator = "+";
    operationsNumber = 0;
    result = false;
});



operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        //if an operation is already in process, clicking next operation will
        //display the result of previous operation, but input of any number
        //will clear the display and populate display with that number
        if(operationsNumber>0) {
            display.textContent = singleOperation("=");
            result = true;
            setCurrentNumber();
        } else {
            //clear display for another number
            clearDisplay();
        }
        //We also need to set global operator
        globalOperator = button.id;
        //We need to store displayed number after clicking simple operation,
        firstNumber = currentNumber;
        operationsNumber++;
    });
});

//After clicking single operation, we need to determine which operation to use
//then, we need to display return of that operation, and setCurrentNumber
singleOperationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = singleOperation(button.id);
        setCurrentNumber();
    });
});