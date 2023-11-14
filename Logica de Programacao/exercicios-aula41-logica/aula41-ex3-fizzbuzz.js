function isNumber(value) {
    return typeof value === 'number' && Number.isInteger(value);
}

function checkDivision(number, divider) {
    return number % divider === 0;
}

function FizzBuzz(value) {
    if (!isNumber(value)) return;

    if ((!checkDivision(value, 3) && !checkDivision(value, 5))) return value;

    if(checkDivision(value, 3) && checkDivision(value,5)) return `${value} - FizzBuzz`;

    if (checkDivision(value, 3))  return `${value} - Fizz`;

    if (checkDivision(value, 5))  return `${value} - Buzz`;
}

for(let i = 0; i <= 100; i++){
    console.log(FizzBuzz(i));
}