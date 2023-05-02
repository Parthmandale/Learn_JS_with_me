// Q1) The difference between null and undefined?


// null-->>
var name = null;
console.log(name);             //null
console.log(typeof(name));     //object -->> this is a bug in js 
 

// undefined -->>
var age;
console.log(age);             //undefined
console.log(typeof(age));     //undefined


// Q2) What is NaN?

console.log("Parth" - "Mandale");     // Substracting Two String gives NaN -->> Not a Number

// ex->
 var myPhone = 9156663400;
 var myName="Parth";
 console.log(isNaN(myPhone));
 console.log(isNaN(myName));

// ex->
if(isNaN(myPhone)){
    console.log("Please enter a valid number");
}
else{
    console.log('You are ready to go');
}