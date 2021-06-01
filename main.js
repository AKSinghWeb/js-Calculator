let num1;
let num2;
let decimalClick = true;
let backspaceclick = true;
let functionClick = true;
let result = null;
let i = 0;
let display = [];
let operator = null;
let dsply = document.querySelector('#result');
let dsplyOperands = document.querySelector("#operands");
let operands = [];

acitivateNumericBtns();
acitivateFunctionBtns();


function operate(num1, num2) {
    if (operator == '+') return num1 + num2;
    if (operator == '-') return num1 - num2;
    if (operator == '*') return num1 * num2;
    if (operator == '/') return Math.round((num1 / num2) * 100000) / 100000;
}


function acitivateNumericBtns() {
    document.getElementById('zero').addEventListener('click', () => {
        numberDisplay(0);
        enableFunctionBtns();
    });

    document.getElementById('one').addEventListener('click', () => {
        numberDisplay(1);
        enableFunctionBtns();
    });

    document.getElementById('two').addEventListener('click', () => {
        numberDisplay(2);
        enableFunctionBtns();
    });
    document.getElementById('three').addEventListener('click', () => {
        numberDisplay(3);
        enableFunctionBtns();
    });

    document.getElementById('four').addEventListener('click', () => {
        numberDisplay(4);
        enableFunctionBtns();
    });

    document.getElementById('five').addEventListener('click', () => {
        numberDisplay(5);
        enableFunctionBtns();
    });

    document.getElementById('six').addEventListener('click', () => {
        numberDisplay(6);
        enableFunctionBtns();
    });

    document.getElementById('seven').addEventListener('click', () => {
        numberDisplay(7);
        enableFunctionBtns();
    });

    document.getElementById('eight').addEventListener('click', () => {
        numberDisplay(8);
        enableFunctionBtns();
    });

    document.getElementById('nine').addEventListener('click', () => {
        numberDisplay(9);
        enableFunctionBtns();
    });

    document.getElementById('decimal').addEventListener('click', () => {
        if (decimalClick) {
            numberDisplay('.');
        }
        decimalClick = false;
        enableFunctionBtns();
    });
}

function acitivateFunctionBtns() {
    document.querySelector('#ac').addEventListener('click', () => {
        clearAll();
    });

    document.querySelector('#backspace').addEventListener('click', () => {
        if (backspaceclick) {
            display.pop();
            if (typeof(operands[(operands.length) - 1]) == 'number') operands.pop();
            dsplyOperands.textContent = operands.join("");
        } else {
            clearAll();
        }
    });

    document.getElementById('plus').addEventListener('click', () => {
        i++;
        acitivateFunctionOperations("+");
    });

    document.getElementById('minus').addEventListener('click', () => {
        i++;
        acitivateFunctionOperations("-");
    });

    document.getElementById('multiply').addEventListener('click', () => {
        i++;
        acitivateFunctionOperations("*");
    });

    document.getElementById('divide').addEventListener('click', () => {
        i++;
        acitivateFunctionOperations("/");
    });

    document.getElementById('equal').addEventListener("click", () => {
        displayResults();
        dsplyOperands.textContent = '';
        decimalClick = true;
        i = 0;
    });
}

function numberDisplay(num) {
    display.push(num);
    operands.push(num);
    dsplyOperands.textContent = operands.join('');
}

function operation(sign) {
    num1 = +(display.join(''));
    operator = `${sign}`;
    display = [];
    decimalClick = true;
}

function displayResults() {
    num2 = +(display.join(''));
    result = `${operate(num1, num2)}`;
    display = [];
    operands = [];
    display = result.split('');
    operands.push(+(display.join('')));
    operator = null;
    if (result == "Infinity") dsply.textContent = 'ERROR';
    else dsply.textContent = `=${+result}`;
    backspaceclick = false;
}

function clearAll() {
    decimalClick = true;
    display = [];
    operands = [];
    operator = null;
    result = null;
    dsply.textContent = '';
    dsplyOperands.textContent = '';
    i = 0;
    functionClick = true;
}

function enableFunctionBtns() {
    backspaceclick = true;
    functionClick = true;
}

function acitivateFunctionOperations(operator) {
    if (functionClick) {
        if (i > 1) {
            displayResults();
        }
        operation(operator);
        if (operator == '*') operands.push("×");
        else if (operator == '/') operands.push('÷');
        else operands.push(operator);
        dsplyOperands.textContent = operands.join("");
    }
    functionClick = false;
}