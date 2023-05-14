const bio ="I am Parth M"
console.log(bio);



// properties of string

//  1) .lenght 

let  name = "Parth Mandale";
console.log(name.length);




//  2) Escape character

// let data = " we are "going" to play."   -->> Error 

let data = " we are \"going\" to play." 
console.log(data);
// OR
let data1 = 'we are "going" to play.'
console.log(data1);

// Wise versa double and single quote can be used





//  3)  .indexOF(val,index from where to start counting)

let me = "I am Parth "

console.log(me.indexOf("Parth"));  //5
console.log(me.indexOf("a", 3));   //6
console.log(me.lastIndexOf("a"))   // counts from end - 6





// 4) SEARCHING A STRING  .search

const fig = "parth here"
console.log(fig.search("e"));  // here in search no index of seraching can be inclluded as in indexOf



// 5) Extracting string parts 3 methods->
// 1) slice -> start and end but do not include the end index (new string)

var myself = 'Parth mandale' ;
let cut = myself.slice(0,6)
console.log(cut); 

console.log(myself.slice(6))  // start from 6 and till end
console.log(myself.slice(6, -2))  // start from 6 and till end but  then delete the last 2 element as it is minus(-)

