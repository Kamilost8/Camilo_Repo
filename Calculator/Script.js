
const operator = prompt('Enter operator to perform the calculation \n 1 = addition \n 2 = subtraction \n 3 = multiplication \n 4 = division \n ');

if(operator == '1'){
    const number1 = parseFloat(prompt ('Enter the first number: '));  
    const number2 = parseFloat(prompt ('Enter the second number: '));  
  
    let result; 
        result = number1 + number2;
        window.alert(" Result is" + result);   
}
else if(operator == '2'){
    const number1 = parseFloat(prompt ('Enter the first number: '));  
    const number2 = parseFloat(prompt ('Enter the second number: '));  
  
    let result; 
        result = number1 - number2;
        window.alert(" Result is" + result);   
}
else if(operator == '3'){
    const number1 = parseFloat(prompt ('Enter the first number: '));  
    const number2 = parseFloat(prompt ('Enter the second number: '));  
  
    let result; 
        result = number1 * number2;
        window.alert(" Result is" + result);   
}
else if(operator == '4'){
    const number1 = parseFloat(prompt ('Enter the first number: '));  
    const number2 = parseFloat(prompt ('Enter the second number: '));  
  
    let result; 
        result = number1 / number2;
        window.alert(" Result is" + result);   
}
else
{
    window.alert(" Result is invalid");
}
    window.alert(" Result is" + result);  
