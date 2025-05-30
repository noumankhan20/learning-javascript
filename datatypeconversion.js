let score = "69abc";
let score2 = null;
let score3 = undefined;
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //iska output aise NaN (Not a Number) aayega because the string cannot be converted to a number
console.log(Number(score2)); // iska output 0 aayega because null is converted to 0
console.log(Number(score3)); // iska output NaN aayega because undefined is not a number


let isLoggedIn = true;
let booleanisLoggedIn = Number(isLoggedIn);
console.log(booleanisLoggedIn);
//boolean to number conversion is done by converting true to 1 and false to 0