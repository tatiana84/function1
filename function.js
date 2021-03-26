// FIRST CONDITION:
function findMax(num1, num2) {
    return Math.max(num1, num2);
}
//findMax(10, 99);
console.log(findMax(10, 99));
console.log(findMax(5, 1));

//SECOND CONDITION:
function findSign(num1, num2, sign) {
    if (sign === '+') {
        return num1+num2;
    }
    else if (sign === '-') {
        return num1-num2;
    }
    else if (sign === '*') {
        return num1*num2;
    }
    else if (sign === '/') {
        return num1/num2;
    }
    return 'It is not a valid operation!';

}
console.log(findSign(10, 40, '*'));
console.log(findSign(4, 3, '%'));
console.log(findSign(1000, 14, '/'));
console.log(findSign(99, 99, '+'));