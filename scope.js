//scopes are mainly used in js to define the visibility of variables declared with let var & const 
{}// when this comes in a function/if-else rather than object this {curly braces} are called as scope 
var c =300// the reason we should not use var
let a=500
if (true){// and everything we write inside the if block it is called as block scope & whatever we write outside the 
    //out side the if block is called as global scope.
    let a= 10//it is a block scope
    console.log("inside the if block",a);
    
    const b= 20//it is also a block scope
    var c= 5// it is known as a function scope 
}
console.log(a);
// console.log(b);
console.log(c);


