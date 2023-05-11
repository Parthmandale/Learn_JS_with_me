
let arr1 = [2,3,4,6,8];

let newArr1 = arr1.reduce( (accumalator, curElem, index, array) => {
    return accumalator += curElem;
})

console.log(newArr1);