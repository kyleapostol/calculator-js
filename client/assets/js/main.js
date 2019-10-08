$(document).ready(initialize);

function initialize(){
  applyClickHandlers();
};

var calculation = [];

var displayArray = [];

var stringNumberToPush = '';

var calculationResult = null;
var num = null;

function applyClickHandlers() {
    $('#number-block').on('click', '.number', numbersButtonHandler);
    $('#operator-column').on('click', '.operator',operatorButtonHandler);
    $('#equals').on('click', equalsButtonHandler);
    $('#c-button').on('click', clearCalculator);
    $('#decimal').on('click', numbersButtonHandler);
};

function clearCalculator(event) {
    var clearButton = $(event.currentTarget).find('c-button');
    displayArray = []; 
    calculation = [];
   // console.log('This is the clearButton:', clearButton);
    updateDisplay();
}

var inputtedNumber = '';
var decimalCheck = false; 

function numbersButtonHandler(event) {
    inputtedNumber = $(event.currentTarget).find('p').text();
    console.log('inputtedNumber: ', inputtedNumber);
    stringNumberToPush = stringNumberToPush + inputtedNumber;
    console.log('stringNumberToPush: ', stringNumberToPush);
    displayArray.push(inputtedNumber);
    updateDisplay();
}
var inputtedOperator = '';
function operatorButtonHandler(event){
    inputtedOperator = $(event.currentTarget).find('p').text();
    console.log('inputtedOperator: ', inputtedOperator);
    displayArray.push(inputtedOperator);
    
    calculation.push(stringNumberToPush);
    console.log('stringNumberToPush: ', stringNumberToPush);
    calculation.push(inputtedOperator);
    if(stringNumberToPush.length > 0) {
        stringNumberToPush = '';
        }
}
function equalsButtonHandler(event){
    console.log('stringNumberToPush: ' + stringNumberToPush ); 
    
    calculation.push(stringNumberToPush);
    
    
    var i = 3;
    while(calculation.length >= i) {
        numspliced = calculation.splice(0,3);
        console.log('numspliced', numspliced);
//        for( var x = 0; x < numspliced.length; x++){
//             var result = numspliced[x].split('');
//            for (var i = 0; i < result.length; i++){
//              if(result[i] === '.') {
//                 result.splice(i,1);
//                 console.log('took a decimal: ' + i);
//          }
        
//            var newValue = result.join('');
//            console.log('this is after the loop: ', result);
//            console.log('this is after the loop: ', newValue);
           
    
//        
// var oneDecimalValue = numspliced.unshift(result);
//            console.log('new numspliced: ', oneDecimalValue);
//        
//        
//var foo = '5...1';
//
//var result = foo.split('');
//console.log('this is before the loop: ', result)
//for (var i = 0; i < result.length; i++){
//  if(result[i] === '.') {
//     result.splice(i,1);
//     console.log('took a decimal: ' , i);
//    
//  }
//}
//var x = result.join('');

//console.log('this is after the loop: ', result)
        
        
        
        
        
        
        
    if(stringNumberToPush.length > 0) {
        stringNumberToPush = '';
        displayArray = [];
      }   
    console.log('About to calculate:', numspliced);
//        for ( var numSplicedIndex = 0; numSplicedIndex < numspliced; numSplicedIndex++) {
//            
//        }
    var answer = calculate(numspliced[0],numspliced[1],numspliced[2]);
    calculation.unshift(answer);
    }
    
    console.log('this is calculation: ', calculation);
    
    console.log('This is the answer variable: ', answer);
    displayArray.push(answer);
    console.log('displayArray: ', displayArray);
    updateDisplay();
}
//function successiveOperation(){
//        var copyCalculation = calculation;
//        if(copyCalculation.length>=3) {
//        num = copyCalculation.slice(0,3);
//        console.log('this is num', num);
//        return num, copyCalculation; 
//        }
//}

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





































    
    
    
    
    
    
   




























    
    
    
    
    
    
    
    
    
    
    
    
    
