const month =["jan","feb","march", "april"];

const newMonth = month.splice(month.length,0,"may");  // want to add on 5th index , 0 deletion , wanted to add may at 5th index
console.log(month);