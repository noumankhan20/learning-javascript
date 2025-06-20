function addtwonumbers(num1,num2){// these are the parameters meaning when you define a fucntion then you gave over there parameters
    console.log(num1+num2);
}
addtwonumbers(9,8)
addtwonumbers(9,"9")// and here these are called as arguements when you call a function and there you give it a value thats where it is called as arguement
// Now let suppose you have that without console.log give me the answer of the addition 
// here how you can do it using browser
// function addnumbers(num1,num2){
//     return num1+num2;
// }
// alert(addnumbers(5,8))// here in the alert pop up you can see the addition of the numbers (but this will work
// only in the browser f12 network tgab of console cause alert is the browser fucntion only )
// the main thing is that after a return statement in the function the console.log wont work but the before it 
// it will work 

function login(nouman){
    if(!nouman){
        console.log("Please enter the name");
        return
    }
    return `${nouman} just logged in `
}
console.log(login("Nouman"));// this line will give us the output as we did console.log over here
 login("Nouman")// this line will not give us any output 
// login("Akshat")
// console.log(login("akshat"));

function calculation(...num1){// these 3 dots are called as rest operators and spread operators but depending on the use case 
    //they are divided into rest and spread operators
    return num1
}
console.log(calculation(200,300,400,500));// for now these 3 dots are used as rest operators and its output will be in as arrays 
// now will have another option over here 

function calculated(val1,val2, ...num1){
      return num1
}
console.log(calculated(200,500,600,1000));// these is where the val1 and val2 will have the values of the 200=val1 and 500=val2 
// 
const user={
    username:"Nouman",
    age:19
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
    
}// this is where we can access the object using the function 
handleObject(user)
handleObject({
    username:"Abujojo",
    age:20
})

const myNewArray=[200,300,500,1000]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));
