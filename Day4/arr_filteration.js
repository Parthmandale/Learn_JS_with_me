//only problem in find method is it only gives one value

const prices = [200,300,400,500,600];

const findElem = prices.find((currval) => {

    return currval < 400;
});
console.log();
 console.log(findElem);  //200

 //find index of

 const findElemt = prices.findIndex((currval) => {

    return currval > 400; //3
});
console.log();
 console.log(findElemt);


 // .filter() - returns the array containing all the elemnts of the calling array for which the provided filtering function return true
 const price =[ 200, 300, 350 ,400, 500,600];

 const newprice = price.filter((elem) =>{
    return elem > 400;
 });

 console.log(newprice);
 

 //Arrays .sort() -->> everything is sorted according to strings

const months = ["march","april", "may", "nov" , "feb" ];
console.log(months.sort());

// num sorting 
const num = [5,8,55,14,99 ];
console.log(num.sort());