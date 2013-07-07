// JavaScript Document
/*  calc13219747.js
	Assmt1 Mobility INFT73-336
	Charisse Gebhart
	SID: 13219747           
*/
var currentNumber = 0;
var firstNumber = 0;
var secondNumber = 0;
var calcOperator = '+';
var currentMemoryValue = 0;
var answer = 0;
var decimalCount = 0;
																	
function showNumber(digit){			// Each time a digit is clicked, show it in the display			
	if (currentNumber.toString().length > 9)// Defensive programming: no more than 10 digits to be displayed
		{
		alert("Number must be 10 digits or less");
		return;
		}

	if (decimalCount == 1 && digit == '.')
		{
		alert("You may not enter multiple decimal points for one number");
		return;
		}
		else if (digit == '.')
			{decimalCount = decimalCount + 1;}
		
	if (document.getElementById("display").value == 'Ready' || 
		document.getElementById("display").value == null || 
		document.getElementById("display").value == '0' ||
		currentNumber == '0')
		{
		document.getElementById("display").value = digit;
		currentNumber = document.getElementById("display").value;
		}

		else {
		currentNumber = document.getElementById("display").value;
		// shift existing numbers left and concatenate new digit on the right side
		document.getElementById("display").value = currentNumber + digit.toString();				
		currentNumber = document.getElementById("display").value;}						
}														
																			
function storeValue (){	 				
	currentMemoryValue = document.getElementById("display").value;
}

function storeOperator (operator){	 				
	firstNumber = document.getElementById("display").value;		
	calcOperator = operator;
	currentNumber = 0;
	decimalCount = 0;
}
	
function showMemoryValue(){
	document.getElementById("display").value=currentMemoryValue;
}

function clearNumber(){
	document.getElementById("display").value = "0";
}

function Calculate(){
	secondNumber = document.getElementById("display").value;
	answer = eval(firstNumber + calcOperator + secondNumber);
	if (answer.toString().length > 10)	
		{
		alert("Number too large to display");
		return;
		}
	document.getElementById("display").value = answer;
	currentNumber = 0;
	decimalCount = 0;
}
