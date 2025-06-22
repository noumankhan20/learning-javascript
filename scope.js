// //scopes are mainly used in js to define the visibility of variables declared with let var & const 
// {}// when this comes in a function/if-else rather than object this {curly braces} are called as scope 
// var c =300// the reason we should not use var
// let a=500
// if (true){// and everything we write inside the if block it is called as block scope & whatever we write outside the 
//     //out side the if block is called as global scope.
//     let a= 10//it is a block scope
//     console.log("inside the if block",a);
    
//     const b= 20//it is also a block scope
//     var c= 5// it is known as a function scope 
// }
// console.log(a);
// // console.log(b);
// console.log(c);
// now will move towards the nested scopes
function one(){
    const firstname="Nouman"

    function two(){
        const age=19
        console.log(firstname);
        
    }
    // console.log(age)// this line gave us the error because as we can see the age was defined inside the function and we 
    // were trying to access the console.log outside the function two
    two()

}
one()
//another eg can be this 
if (true){
    const firstname="Abujojo"
    if(firstname === "Abujojo"){
        const lastname=" Khan"
        console.log(firstname+ lastname);
        
    }
    // console.log(lastname);got the same error as expected 
    
}
// console.log(firstname);// here to the thing is same access it outside the function


// now will just have a good look at the hoisting 
console.log(addone(7))
function addone(num1){
    return num1+1
}

// console.log(addtwo(9))// here what we did that ki we called it before initializing so got the error this can be 
// called as the a bit introduction about hoisting 
const addtwo=function(num1){
    return num1+3 
}