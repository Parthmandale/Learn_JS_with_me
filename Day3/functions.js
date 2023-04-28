// Function -> u can reuse the code multiple time by only defining it once

function sum() {
    var a =1, b=2;
    var total=a+b;
    console.log(total);
}
sum();

// function parameter we put it in fun defination
// function argument we put it in fun calling

function sum(a,b) {
    var total=a+b;
    console.log(a+b);
}
sum(5,4);
sum(8,4);
sum(0,4);


// function expressin  -->> create a function and put into a variable


function sum(a,b) {
    var total=a+b;
    console.log(a+b);
}


// ananoymous function
var funexp = sum(4,3);

// return keyword

function sum(a,b) {
   return a+b;
}

var funexp = sum(4,3);
console.log("The sum of a and b = "+funexp);


// Anonymous function -->> function who doesnt have name   

var funexp = function (a,b) {
    return a+b;
 }
 
var sum1 = funexp(12,45);
var sum2 = funexp(12,45);

 console.log("The sum of a and b = " +funexp(5,7))

console.log(sum1);
console.log(sum1 > sum2);  // false