function setupCalculator() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calculator_keys button");
let currentInput =  '';
let firstNumber = null;
let operator = null

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; //    tatched value ila t clicka

        if (!isNaN(value) || value === '.') {
//number o fassila
            currentInput += value;
            display.value = currentInput;//ntl3 current input
        } else if (value === 'C'){
            //mss7 kolchi
            currentInput = '';
            firstNumber = null;
            operator = null
display.value = "";  
     }
     else if(value === "=") {
   if (firstNumber !== null && operator null && currentInput ()
   const secondNumber = parseFloat(currentInput);
   let result;
   switch (operator){ 
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            return; // ila makynch no operator  set
    }
    display.value = result; // Show the result in the display
    currentInput = ''; // Reset current input for next calculation
    firstNumber = null; // Reset first number for next calculation
    operator = null; // Reset operator for next calculation 
   }