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
let cut = myself.slice(0,6);
console.log(cut); 

console.log(myself.slice(6))  // start from 6 and till end
console.log(myself.slice(6, -2))  // start from 6 and till end but  then delete the last 2 element as it is minus(-)

// 2) substring - same as slice but no -ve value

var myself2 = 'Parth mandale' ;
let cut2 = myself.substring(0,6);
console.log(cut2); 
console.log(myself2.substring(6))  // start from 6 and till end
console.log(myself2.substring(6, -2)) // 0 to 6 bcoz -ve 


//3 substr() - here the 2nd papa tells the lenght of extracted part needed

var myself3 = 'Parth mandale' ;
let cut3 = myself.substr(0,7);
console.log(cut3); 
console.log(myself2.substr(6)) 
console.log(myself2.substr(7, 3)) 




// 6) Replace string content ()

let my = "parth the coder";
let my1 = my.replace("coder", "developer");
console.log(my1);




// 7) Extracting String character

// there are 3 methods -

// 1) charAt()

let a = "hello";
console.log(a.charAt(1));

// 2) charCodeAt()

let b = "hello";
console.log(b.charCodeAt(1));  // unique num generated by compiler (UNICODE)



// Some other Methods in String
// 1)
let c = "hello";
console.log(c[1]);   // can be sed as array


// 2) 
let d = "helLO";
console.log(d.toUpperCase());
console.log(d.toLowerCase());


// 3)
let e = "hello";
let f = "world";
console.log(e.concat(f));
console.log(e.concat(" ", f));


// 4) 
let g = "          hello        ";
console.log(g);
console.log(g.trim());  // clear the whitespace at first and at last


// 5)
var txt = "a,b,c, d"; 
console.log(txt);
console.log(txt.split(","));  // this will give the space inbetween 
console.log(txt.split(" "));