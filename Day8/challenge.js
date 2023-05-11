// find sq root of the array using map chain method

// let arr = [25, 36, 16, 4, 44];  

// let newArr = arr.map((curElem) => {
//     return Math.sqrt(curElem);
// })

// console.log(newArr)




// multiply every element by 2 and return only element greater than 10

let arr1 = [2,3,4,6,8];

let newArr1 = arr1.map( (curElem) => {
      return curElem*2;
}).filter((curElem) => {                      //Chaining method
    return curElem > 10;
})
 
console.log(newArr1)