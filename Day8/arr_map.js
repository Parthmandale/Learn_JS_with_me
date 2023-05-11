
// const numbers = [1, 4, 9];
// const greater = numbers.map((val) => {  // x is parameeter over here 
//    return val > 2;
// })  

// console.log(greater); 
// console.log(numbers); 

const numbers = [1, 4, 9];
const greater = numbers.map((curVal,index,arr) => {   
   return `Element ${curVal} of index: ${index} in array: ${arr}`;
})  

console.log(greater); 
console.log(numbers); 


