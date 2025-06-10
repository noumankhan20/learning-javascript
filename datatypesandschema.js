let name ="abujojo";
let age= 19;
let isLoggedIn = false;
console.log([name ,age,isLoggedIn]);

//datatypes in js are 
// Number
// String = "hello world"
// Boolean = true/false
// Null = null standalone value
// undefined = variable is declared but not assigned any value
// symbol = unique and immutable value
console.log(typeof age);
console.log(typeof undefined);// iska output undefined aayega
console.log(typeof null);// iska output object aayega 
// ye hogaye primitive datatypes in js 


// now these are the non-primitive datatypes in js
    // such as arrays,objects,functions etc but these 3 are the main ones 
    const names =["abujojo","nouman","maaz"]// and as you know these are the arrays in js 
    let theobj={
        name:"nouman",
        age : 19,
    }// these are how the objs are created in js


    const myfunction = function(){
        console.log(" Hii i am a function");
    }
    myfunction();// ye line se function call hoga aur tab hi wo execute hoga 
    // this  is how the functions are created in js 







// Now will be going forward towards the stack and heap memory in js 

// stack is the one which store the primitive values in js like number, string, boolean, null, undefined, symbol
// heap is the one which store the non-primitive values in js like objects, arrays, functions, etc