//nested if else if year is leap or not

var year = 2010;
debugger
if(year%4===0){
if(year%100===0){
    if(year%400===0){
        console.log("This is a leap year"); 
    }
    else{
        console.log("This is not a leap year");
    }
}
else{
    console.log("This is a leap year");
}
}
else{
    console.log("This is not a leap year");
}

//What is truthy and falsy value in js
//In js we have  only 5 falsy value ( 0, " ", null, undefined, NaN )-> and this will always return else part in output and rest are truthy

// var score;
if(score=0){
    console.log("we lost");
}
else{
    console.log("We won");
}

// ex->
if(NaN){
    console.log("we lost");
}
else{
    console.log("We won");
}