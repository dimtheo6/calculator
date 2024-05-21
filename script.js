const keys = document.querySelector('.numbers');
const operators = document.querySelector('.operator');
const display = document.querySelector('.display');

let a = 0;
let b = 0;
let operator = "";

function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

/* function operate(a,operator,b){

    if (operator === "+"){
        console.log(add(a,b));
    }else if(operator ==="-"){
        console.log(sub(a,b));
    }else if(operator ==="*"){
        console.log(mult(a,b));
    }else{
        console.log(div(a,b));
    }

} */
keys.addEventListener('click', e=>{
    const key = e.target;
    console.log(key);
})


 