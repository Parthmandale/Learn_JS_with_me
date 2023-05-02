//only problem in find method is it only gives one value

const prices = [200,300,400,500,600];

const findElem = prices.find((val) =>      //prices.find((val) here uses the method of .find by telling the name of const(price) and (val) is parameter passed.
 {                                         //yello round bracket is stored becoz of the it is in method find and it is being find
    return val < 400;
});
~
console.log();
console.log(findElem);  //200

 //find index of

 const findElemt = prices.findIndex((currval) => {

    return currval > 400; //3
});

 console.log(findElemt);


 // .filter() - returns the array containing all the elemnts of the calling array for which the provided filtering function return true
 const price = [ 200, 300, 350 ,400, 500,600];

 const newprice = price.filter((elem) =>{      // here price.filter is the method

    return elem > 400; // [ 500, 600 ]
 });

 console.log(newprice);

 //Arrays .sort() -->> everything is sorted according to strings

const months = ["march","april", "may", "nov" , "feb" ];

console.log(months.sort());   // sorted but not actual month wise, it is sorted 1st alphabetic (string) wise  

// num sorting 
const num = [5,8,55,14,99 ];
console.log(num.sort());       // sorted but not actual month wise, it is sorted 1st alphabetic (string) wise 