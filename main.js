
//calculator project
const display = document.getElementById('display'); // l input dial kola display

const buttons = document.querySelectorAll(".calculator_keys button");



function clearDisplay() {
    display.value = ''; // cleari screeen 
}
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.addEventListener('click', () => {
           const value = button.textContent; // tatched value ila t clicka
       
        });
    if (value === 'C') {
        