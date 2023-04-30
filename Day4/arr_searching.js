// indexOf() and lastIndexOf() -> output is index number
// var friends=['A', 'B', 'C', 'C', 'D', 'E', 'F'];

// console.log(friends.indexOf("C"));      // this checking from first index and whichever coming first it is giving its index

// console.log(friends.indexOf("C" , 3));  // this is directly starting with the 3rd index froom the staring

// console.log(friends.lastIndexOf("C"));  // this checking from last index and whichever coming first it is giving its index

// //include()  -> output is true/false
var friends=['A', 'B', 'C', 'C', 'D', 'E', 'F'];
console.log(friends.includes("C" ));       //true
console.log(friends.includes("C" , 3 ));  //  false 
console.log(friends.includes("C" , 4));  //  false  becoz starting the s=check rfrom 4th index

