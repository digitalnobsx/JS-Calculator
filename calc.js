
// get first number from user
var num1 = parseFloat(prompt("Please Enter first number : "));
// get operator to perform calculation of two numbers
var operator = prompt("Enter operator ( either +, -, * or / ) : ");
// get second number from user
var num2 = parseFloat(prompt("Please Enter second number : "));

var result;

// using if and else if to perform operation according to the operator
if (operator == "+") 
{
result = num1 + num2;  // to add two numbers
}
else if (operator == "-") 
{
    result = num1 - num2;  // to subtract two numbers
}
else if (operator == "*") 
{
    result = num1 * num2;  // to multiple two numbers
}
else
{
    result = num1 / num2; // to divide two numbers
}

// Display the result
window.alert("Required result is : " + result);
