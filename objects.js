// here will be going towards the objects in the js 
//singleton it is where we create the object using constructor 
// Object.create
// in Objects we give keys and values pair always 
//object literals are written like this 
/// These are just the objects literals in the javascript 
const mySym= Symbol("key1")//This is how you can access the symbol in objs

const JSuser= {
        name:"Nouman",
        age:19,
        [mySym]:"mykey1",
        email:"nouman@example.com",
        isLoggedIn:false,
        lastLoggedIn:['monday','wednesday']
}
console.log(JSuser.name);
console.log(JSuser["email"]);// but this should used mostly !!!
// in the above both the console.log statements we can get the email key value through both of this 
//above console.logs we can access the objects

console.log(JSuser[mySym]);
JSuser.email="abujojo@example.com"
console.log(JSuser);
Object.freeze(JSuser)

JSuser.email="nouman@chatgpt.com"
console.log(JSuser);
JSuser.greetingTwo= function(){
        console.log("HEY");
        
}
console.log(JSuser.greetingTwo);



