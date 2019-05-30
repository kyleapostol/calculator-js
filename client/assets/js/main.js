$(document).ready(initialize);

function initialize(){
  applyClickHandlers();
};

var calculation = [];

var displayArray = [];

var stringNumberToPush = '';

var calculationResult = null;

function applyClickHandlers() {
    $('#number-block').on('click', '.number', numbersButtonHandler);
    $('#operator-column').on('click', '.operator',operatorButtonHandler);
    $('#equals').on('click', equalsButtonHandler);
};

var inputtedNumber = '';
function numbersButtonHandler(event) {
    inputtedNumber = $(event.currentTarget).find('p').text();
    stringNumberToPush = stringNumberToPush + inputtedNumber;
    displayArray.push(inputtedNumber);
    updateDisplay();
}

var inputtedOperator = '';
function operatorButtonHandler(event){
    inputtedOperator = $(event.currentTarget).find('p').text();
    console.log('inputtedOperator: ', inputtedOperator);
    displayArray.push(inputtedOperator);
    calculation.push(stringNumberToPush);
    calculation.push(inputtedOperator);
    if(stringNumberToPush.length > 0) {
        stringNumberToPush = '';
        }
}

function equalsButtonHandler(event){
    calculation.push(stringNumberToPush);
    if(stringNumberToPush.length > 0) {
        stringNumberToPush = '';
        displayArray = [];
      }   
    
    console.log('About to calculate:', calculation);
    var answer = calculate(calculation[0],calculation[1],calculation[2]);
    console.log('This is the answer variable: ', answer);
    displayArray.push(answer);
    updateDisplay();
}
var displayText;
function updateDisplay() {
    displayText = displayArray.join(''); 
    $('#display-text').text(displayText);
}

function calculate(num1,operator,num2){
    var number1 = parseFloat(num1);
    console.log(number1);
    var number2 = parseFloat(num2);
    console.log(number2);
    var result = null;
    switch(operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break; 
        case '/':
            result = number1 / number2;
            break;
          }
        console.log('result: ', result); 
    return result;
    
 }









































    
    
    
    
    
    
   




























    
    
    
    
    
    
    
    
    
    
    
    
    
