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

// Lets start with the stack memory 
let nameoftheguy= "Nouman"
let anothername= nameoftheguy;
anothername = "Abujojo";
console.log(anothername);
 console.log(nameoftheguy);// as in see here simple hai jaise maine anothername ko "Abujojo" assign kiya tha 
 // to wo sirf anothername ko change karega aur nameoftheguy ko nahi karega kyuki ye stack memory me hai

 // Now lets see the heap memory
 let userOne={
    email:"nouman@example.com",
    name:"Nouman",
 }
 let userTwo = userOne;
 userTwo.email ="abujojo@example.com";

 console.log(userOne.email);
 console.log(userTwo.email);

 //as you can see here userOne and userTwo are pointing to the same object in the heap memory aur heap memory mein 
 // reference hota h matlab jaise maine userOne ko assign kara userTwo to wo dono same jagah point karenge 
 // and jaise maine userTwo.email ko change kara to wo userOne.email ko bhi change karega
 // kyuki dono same jagah point kar rahe hain heap memory mein