function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".calculator button");
let to_display = '0';
let first_number = '0';
let second_number = '0';
let operator = null;
let result_displayed = false;

function operate() {

    let result = 0;
    if (operator === null)
        return;

    switch (operator) {
        case '+':
            result = add(Number(first_number), Number(second_number));
            break;
        case '-':
            result = subtract(Number(first_number), Number(second_number));
            break;
        case '*':
            result = multiply(Number(first_number), Number(second_number));
            break;
        case '/':
            if (Number(second_number) === 0) {
                clear_all();
                to_display = 'NOPE';
                return;
            }
            result = divide(Number(first_number), Number(second_number));
            break;
        default:
            alert(`${operator}: Not a valid operator`);
    }

    clear_all();
    
    to_display = result.toString();
    if (to_display.length > 12) {
        result = result.toExponential(6);
        to_display = result.toString();
    }
    first_number = result;
    result_displayed = true;
}

function init() {
    buttons.forEach(button => button.style.gridArea = button['id']);
}

init();

function go_display(content) {
    display.textContent = to_display;
}

function clear_all() {
    to_display = '0';
    first_number = '0';
    second_number = '0';
    operator = null;
    result_displayed = false;
}

function error() {
    clear_all();
    to_display ='ERROR';
}

function save_operator(op) {

    if (operator !== null)
        operate();
    operator = op;
    if (to_display === 'ERROR' || to_display === 'NOPE')
        to_display = '';
    to_display += op;
    result_displayed = false;
}

function save_number(nb) {

    if (!result_displayed && (to_display.length < 12 && operator === null) 
        || (to_display.length < 14 && operator !== null)) {
        
        if (operator === null) {
            if (nb === '.' && first_number.indexOf('.') >= 0)
                return error();
            first_number += nb;
        }
        else {
            if (nb === '.' && second_number.indexOf('.') >= 0)
                return error();
            second_number += nb;
        }

        if (to_display === '0' || to_display === 'ERROR' 
            || to_display === 'NOPE') {
            to_display = nb;
            result_displayed = false;
        }
        else
            to_display += nb;
    }
    else if (result_displayed) {
        first_number = nb;
        to_display = nb;
        result_displayed = false;
    }

}

function save_input() {

    switch (this['accessKey']) {
        case 'C':
            clear_all();
            break;
        case '=':
            operate();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            save_operator(this['accessKey']);
            break;
        default:
            save_number(this['accessKey']);
    }

    console.log(to_display);
    go_display(to_display);
}

buttons.forEach(button => button.addEventListener('click', save_input));