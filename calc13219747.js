// JavaScript Document
/*  calc13219747.js
	Assmt1 Mobility INFT73-336
	Charisse Gebhart
	SID: 13219747           
	
	Questions: 
	animation not working
	else statement in ShowNum not executing
	intermediate (fluid resizing)
*/
var currentNum = 0;
var first = 0;
var second = 0;
var calcOper = '+';
var currentMem = 0;
var answer = 0;
var deciCount = 0;
var numLength = 0;
																	
function showNum(digit){													// Each time a digit is clicked, show it in the display			
	if (currentNum.toString().length > 9)								// Defensive programming: no more than 10 digits to be displayed
		{
		alert("Number must be 10 digits or less");
		return;
		}

	if (deciCount == 1 && digit == '.')
		{
		alert("You may not enter multiple decimal points for one number");
		return;
		}
		else if (digit == '.')
			{deciCount = deciCount + 1;}
		
	if (document.getElementById("display").value == 'Ready' || 
		document.getElementById("display").value == null || 
		document.getElementById("display").value == '0' ||
		currentNum == '0')
		{
		document.getElementById("display").value = digit;
		currentNum = document.getElementById("display").value;
		}

		else {
		currentNum = document.getElementById("display").value;
		document.getElementById("display").value = currentNum + digit.toString();	// shift existing numbers left and concatenate new digit on the right side				
		currentNum = document.getElementById("display").value;}			// send new value to Display					
}																			
																			
function storeVal (){														// Store the type of operator selected to pass in to calculation function--> 				
	currentMem = document.getElementById("display").value;					// get current value from Display
}

function storeOper (operator){												// Store the type of operator selected to pass in to calculation function--> 				
	first = document.getElementById("display").value;						// get current value from Display
	calcOper = operator;
	currentNum = 0;
	deciCount = 0;
}
	
function showMem(){
	document.getElementById("display").value=currentMem;
}

function clearNum(){
	document.getElementById("display").value = "0";
}

function Calculate(){
	second = document.getElementById("display").value;
	answer = eval(first + calcOper + second);
	if (answer.toString().length > 10)	
		{
		alert("Number too large to display");
		return;
		}
	document.getElementById("display").value = answer;
	currentNum = 0;
	deciCount = 0;
}
