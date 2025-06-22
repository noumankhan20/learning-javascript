// here will have the overview about the arrow function
const user={
    username:"ABCD",
    age:19,
    welcomeMessage:function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
        
    }

}
user.welcomeMessage()
user.username="Nouman"
user.welcomeMessage()
console.log(this)// this will give output={} because we are inside the node environment thats why it is giving us the outuput and there is no global object over here.
// and if you do the same console.log(this) in the browser it will give us global object which is mostly windows in js 


function coffee(){
    let username="Nouman"
    console.log(this.username);// this gave us the output as undefined because we cannot use this keyword inside the function
    // console.log(this);// this gave us all things which were there inside the function we can ignore this will define it ahead clearly
}
coffee()

// now will our most common arrow function over here 
const username = () => {
    let username ="hitesh"
    console.log(this);// in the arrow function too this is not working 
    
}


const num= (num1,num2) => {
    return num1+num2// as here curly braces were used {} therefore there was a need to use the return statement and though we called it as explicit return 

}

console.log(num(9,10))// this was just the basic arrow function

const add=(num1,num2) => num1+num2
console.log(add(20,5));// we can also do it like this as it is called as implicit return    



// for the interviews we need to have a look at IIFE


