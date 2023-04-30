// Normal function which is being rarely used now a days
function sum(){
    let a =2, b=3;
    return `the sum of a and b is ${a+b}`
}
console.log(sum());


// Fat arrow functions
const summm = () => {
    let a =2, b=3;
    return `the sum of a and b is ${a+b}`;
}
console.log(summm());

//more short with fat arrow func -> when func of only one line it can wrote without the return keyword 
const add = () => `the add of nums is ${5} + ${6};`

console.log(add());