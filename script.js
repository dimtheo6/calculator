const keys = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equals');
const display = document.querySelector('.display');

let operator;
display.textContent = "0";

function add(a,b){
    return Math.round((a + b)*100)/100;
}

function sub(a,b){
    return Math.round((a - b)*100)/100;
}

function mult(a,b){
    return Math.round((a * b)*100)/100;
}

function div(a,b){
    if (b===0){
        display.textContent = 'you cannot divide by 0';
    }else{
        return Math.round((a / b)*100)/100;
    
    
}
}

/* initiate the calculation */
function operate(a,b){
 console.log('operator is : ',operator);
 console.log(a);
 console.log(b);

    if (operator === "+"){
        return add(a,b);

    }else if(operator === "-"){
        return sub(a,b)

    }else if(operator === "*"){
        return mult(a,b)
      
    }else if(operator === "/"){
            return div(a,b)
    }

}


/* updates the display with the numbers pressed */
keys.forEach(key=>{
    key.addEventListener('click', e=>{
        const key = e.target;
        if (display.textContent === '0'){
            display.textContent = key.textContent;
        }else{
            display.textContent += key.textContent;
        }
      
    })
})

/* stores the operator in a variable and updates the display */
operators.forEach(key=>{
    key.addEventListener('click', e=>{
        const key = e.target;
        operator = key.textContent;
        display.textContent += operator; 
    })
})

/* shows the result on the screen */
equal.addEventListener('click',function(){
 /* splits the numbers shown on display when it finds an operator and stores them in an array */
 let numArray = display.textContent.split(/[+\-*/]/);
 console.table(numArray);
 
 /* stores the first  and second number in the array */
 a = Number(numArray[0]);
 b = Number(numArray[1]);

 if (operator === '/' && b === 0){
    display.textContent = 'you cannot divide by 0';
 }else{
    display.textContent = operate(a,b);
 }

/* updates the display to the result */


});

/* clears the calculator */
clear.addEventListener('click', function(){
    
    display.textContent = "0";
    a = "";
    b = "";
})
