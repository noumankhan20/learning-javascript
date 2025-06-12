// here are just the numbers in the js how you can play with them you can convert the numbers into string too 

const number=100
console.log(number);

const num= new Number(200);
console.log(num);

console.log(num.toString().length);

console.log(num.toFixed(2));//this is used in many cases where you need to calculate the amount it output will be 200.00

const othernumber=123.8990
console.log(othernumber.toPrecision(2));// it is a bit confusing meaning you need to first ensure that by reading the documentation 


const amount=10000000
console.log(amount.toLocaleString('en-IN'));// this is the standard format for using the amount as it is there in the indian according to the indian amount format 
// the above ones were the numbers in the js and 
// here are the maths in the js 
console.log(Math);// this are just gives all the maths fucntions which you can use in the js 
// you can use most of the maths lib from the console of F12 tab 