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
