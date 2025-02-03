var num1 = 50;
var num2 = 40;
var result;
if(num1 > num2) {
    result = num1 * 2;
}
else{
    result = num1 +num2;
}

//Ternary Operator.
result = num1 > num2 ? result *2 : num1 + num2;
console.log(result);