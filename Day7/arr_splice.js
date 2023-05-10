//sol 1: add may in last
// const month =["jan","feb","march", "april"];

// const newMonth = month.splice(month.length,0,"may");  // want to add on 5th index(last) , 0 deletion , wanted to add may at 5th index
// console.log(month);

// sol 2: return value of splice
// console.log(newMonth); //-->> [] empty brackets bcoz we are not deleting anything and splice methiod is more inlclined towards deleting the element

// sol 3: update the march to March

// const updateMonth = month.splice(2,1,"March")
// console.log(month)

//how to search element and update it ?

// const month =["jan","feb","march", "april"];

// const indexofMonth = month.indexOf("feb");     // value of IndexOf 1 is being stored over there

// if(indexofMonth != -1){
//     const update_month = month.splice(indexofMonth, 1, 'February');
//  console.log(month);
// }
// else{
//     console.log("The element is not present");
// }

// delete march from array
// const indexof_Month = month.indexOf("march");

// if(indexof_Month != -1){
//     const update_month = month.splice(indexof_Month, 1, );
//  console.log(month);
// }
// else{
//     console.log("The element is not present");
// }

// delete every thing from march
const month =["jan","feb","march", "april"];
const update = month.splice(1,Infinity)
console.log(month);