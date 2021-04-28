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
}