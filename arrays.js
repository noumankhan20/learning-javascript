// Here will be learning about the arrays in the js 
const myArr= [0,1,2,3,4,7]
console.log(myArr[3])
// methods in the arrays 
myArr.push(8)
console.log(myArr);// as you can see here it is one of the methods in the arrays through which we get a arrays of 8 numbers starting from 0-8
myArr.pop()
console.log(myArr);// it is also as simple it is as push and pop are there 
// similary as this you can use many methods which are there using the arrays in the js 
const myArr1= [0,1,2,3,6]
console.log("A",myArr1)
const mynum= myArr1.slice(1,3);
console.log("B",mynum)

const mynumber=myArr.splice(1,3)
console.log("C",mynumber);

// these were just another methods of the arrays which are known as slice and splice 
