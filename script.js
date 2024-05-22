const keys = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equals');
const display = document.querySelector('.display');
const decimal = document.querySelector('.decimal');
const backSpace = document.querySelector('#backSpace');

let operator;
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*'];
display.textContent = 0;
function add(a, b) {
    return Math.round((a + b) * 100) / 100;
}

function sub(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function mult(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function div(a, b) {
    return Math.round((a / b) * 100) / 100;
}

// initiate the calculation
function operate(a, b) {

    if (operator === "+") {
        return add(a, b);

    } else if (operator === "-") {
        return sub(a, b)

    } else if (operator === "*") {
        return mult(a, b)

    } else if (operator === "/") {
        return div(a, b)
    }
}

// updates the display with the numbers pressed
keys.forEach(key => {
    key.addEventListener('click', e => {
        const key = e.target;

        if (display.textContent === '0') {
            display.textContent = key.textContent;
        } else
            display.textContent += key.textContent;
    })
})

// stores the operator in a variable and updates the display
operators.forEach(key => {
    key.addEventListener('click', e => {
        const key = e.target;
        operator = key.textContent;
        const currentDisplay = display.textContent;
        const lastChar = currentDisplay[currentDisplay.length - 1];

        // Check if the last character is an operator
        if (["+", "-", "*", "/"].includes(lastChar)) {
            // If it is, replace the operator
            display.textContent = currentDisplay.slice(0, -1) + key.textContent;
            // make it so it only accepts one operator
        } else {
            // Otherwise, add the operator to the display
            display.textContent += key.textContent;
        }


    })
})

// onClick event for the decimal button
decimal.addEventListener('click', e => {
    const key = e.target;

    if (display.textContent.includes('.')) {
        display.textContent = display.textContent;
    } else {
        display.textContent += key.textContent;
    }
})

// shows the result on the screen
equal.addEventListener('click', function () {
    // splits the numbers shown on display when it finds an operator and stores them in an array 
    let numArray = display.textContent.split(/[+\-*/]/);

    // makes it work with negative numbers
    if (numArray[0] === '') {
        numArray.shift();
        numArray[0] = '-' + numArray[0];
    }

    // stores the first  and second number in the array 
    a = Number(numArray[0]);
    b = Number(numArray[1]);

    if (operator === '/' && b === 0) {
        display.textContent = 'you cannot divide by 0';
    } else {
        // updates the display to the result
        display.textContent = operate(a, b);
    }
});

backSpace.addEventListener('click', function () {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === "") {
        display.textContent = 0;
    }
})

// ----------------------------- keyboard support -----------------------------------
document.onkeydown = function (e) {
    e = e || window.event;
    let code = e.key;

    if (code == '+' || code == '-' || code == '/' || code == '*') {
        operator = e.key;
        const currentDisplay = display.textContent;
        const lastChar = currentDisplay[currentDisplay.length - 1];

        // Check if the last character is an operator
        if (["+", "-", "*", "/"].includes(lastChar)) {
            // If it is, replace the operator
            display.textContent = currentDisplay.slice(0, -1) + e.key;
            // make it so it only accepts one operator
        } else {
            // Otherwise, add the operator to the display
            display.textContent += e.key;
        }
    } else if (code === 'Enter' || code === '=') {
        // splits the numbers shown on display when it finds an operator and stores them in an array 
        let numArray = display.textContent.split(/[+\-*/]/);

        // makes it work with negative numbers
        if (numArray[0] === '') {
            numArray.shift();
            numArray[0] = '-' + numArray[0];
        }

        // stores the first  and second number in the array 
        a = Number(numArray[0]);
        b = Number(numArray[1]);

        if (operator === '/' && b === 0) {
            display.textContent = 'you cannot divide by 0';
        } else {
            display.textContent = operate(a, b);
        }

        // updates the display to the result
    } else if (code === 'Backspace') {
        display.textContent = display.textContent.slice(0, -1);
        if (display.textContent === "") {
            display.textContent = 0;
        }
        // does not accept duplicate decimal points
    } else if (code === '.') {
        if (display.textContent.includes('.')) {
            display.textContent = display.textContent;
        } else {
            display.textContent += code;
        }
        // filters out the chars to only accept numbers and operators 
    } else {
        for (let i = 0; i < numbers.length; i++)
            if (code.indexOf(numbers[i]) !== -1) {
                if (display.textContent === '0') {
                    display.textContent = code;
                } else
                    display.textContent += code;
            }
    }
};

// clears the calculator
clear.addEventListener('click', function () {

    display.textContent = "0";
    a = "";
    b = "";
})
