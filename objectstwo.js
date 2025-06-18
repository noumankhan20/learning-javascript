// here will be going towards the singleton objects 
const name= new Object()

const nouman={}
console.log(name,nouman)// these both statements will give us empty as nothing is there inside them 

nouman.id="1",
nouman.name="abujojo",
nouman.age=19

console.log(nouman);// as expected the output is like that only 

const user={
    email:"nouman@example.com",
    username :{
        fullname:"noumankhan",
        lastname:"khan"
    }
}
console.log(user)// here as we can see that this are objects inside the object nestedly 


const obj1= {1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={...obj1,...obj2}
console.log(obj3)// here is how simply we can combine two objects using the spread operator
console.log(Object.keys(nouman))// as we can see here we got all the keys of the fucntion nouman and that to in an array
console.log(Object.values(nouman))// as expected the output


console.log(nouman.hasOwnProperty('age'));// this will just tell us about that this fucntion is having that value or not 


// de structring the objects

