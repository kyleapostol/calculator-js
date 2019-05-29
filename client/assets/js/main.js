$(document).ready(initialize);

function initialize(){
  applyClickHandlers();
};

var calculation = [];
//to store all of the numbers and operators required for calculation. 
//used by the function you create to calculate the math operations for all calculations

var displayArray = [];
//used to store all of the numbers and operators that 
//you want to display on the calculator display

var stringNumberToPush = '';
//This variable will be used to hold all of our number strings
//before they are pushed to the calculation array, displayInputs.

var calculationResult = null;

function applyClickHandlers() {
    $('#number-block').on('click', '.number', numbersButtonHandler);
    $('#operator-column').on('click', '.operator',operatorButtonHandler);
    $('#equals').on('click', equalsButtonHandler);
};

var inputtedNumber = '';
function numbersButtonHandler(event) {
    inputtedNumber = $(event.currentTarget).find('p').text();
    inputtedNumber = inputtedNumber + stringNumberToPush;
    displayArray.push(inputtedNumber);
    updateDisplay();
    //console.log('displayArray value: ', displayArray);
    
    //console.log('inputtedNumber: ', inputtedNumber)
    //console.log('numberButtonHandler is running');
    //console.log(event);
}

var inputtedOperator = '';
function operatorButtonHandler(event){
    inputtedOperator = $(event.currentTarget).find('p').text();
    console.log(inputtedOperator);
    displayArray.push(inputtedOperator);
    //console.log(event);
    //console.log('operatorButtonHandler is running');
}

function equalsButtonHandler(event){
    //console.log('equalsButtonHandler is running');
    //console.log(event);
}
var displayText;
function updateDisplay() {
    displayText = displayArray.join(''); //How does the '' concatenate the strings without spaces?
    $('#display-text').text(displayText);
}
