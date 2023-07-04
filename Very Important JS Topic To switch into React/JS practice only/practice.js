// DAY 1 --->>>

// //  const even =(x)=>{ return x % 2 === 0;
// //  }

// //  console.log(even(4));

// function inside fuc 
  
// function app(){
// console.log("inside app");

// function hello() {
// console.log("hello from hello fun");
// }  
// const add =(n1, n2) =>{
//     return n1+n2;
// }

// const mul = (m1, m2) =>{
//     return m1*m2; 
// }
//     hello();
//     console.log(add(4,5));
//     console.log(mul(4,5));
// }

// app();



// DAY 2 --->> MAP, FILTERR, REDUCE




//map
// const arr = [5,1,3,2,6];

// const output = arr.map((x) => x*2 ); // double
// console.log(output);

// const sqr = arr.map((x) => x*x); //square
// console.log(sqr)

// const binary = arr.map((x) => x.toString(2) ) //binary number
// console.log(binary);









// //filter
// // const arr = [5,1,3,2,6];

// // const output = arr.filter((x) => x>2 );
// // console.log(output);





// // reduce
// const arr = [5,1,3,2,6];

// const output = arr.reduce((acc,curr) => {

//     acc = acc+curr;
//     return acc;
// } ,0);

// console.log(output);





 
    //    ------------------------------------- 

// const maximum = [5,1,3,4,8];

// const result = maximum.reduce((acc, curr) =>{
//     if(curr > acc){
//         acc=curr;
//     }
//     return acc;
// });

// console.log(result);
// ----------------------------------


// High level mapn reduce, filter

// const user = [
//     {firstName: "Akshay", lastName: "saini", age:26 },
//     {firstName: "elon", lastName: "musk", age:50 },
//     {firstName: "Donald", lastName: "Trump", age:75 },
//     {firstName: "Deepika", lastName: "Padukon", age:26 }
//     ]

//     const output = user.map((x) => x.firstName + x.lastName); 
// console.log(output);

//     const output = user.reduce((acc, curr)  =>{

//         if(acc[curr.age]){
//             acc[curr.age]++ 
//         }
// else {
//     acc[curr.age] = 1;
// }
// return acc;
//     } , {} )

//     console.log(output);

    //chaining method -> first name less than 30



    // const output = user.filter((x) => x.age< 30).map((x) => x.firstName);

    // console.log(output);



// Event Listener

// const grandparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// grandparent.addEventListener('click', (e) =>{
//     console.log("grandparent")
// });
// parent.addEventListener('click', e =>{
//     console.log("parent")
// });
// child.addEventListener('click', e =>{
//     console.log("child")
// });

// call back function
// function add (n1,n2,callback){
// console.log(n1+n2);
// callback();

// }
// function sayhello(){
//     console.log("hello");
// }
// function sayhi(){
//     console.log("hi");
// }

// add(3,5,sayhi);
// add(10,20,sayhello);

// add(20,40, ()=>{
//    console.log("good bye") 
// })
// add(20,41, function(){
//    console.log("see ya"); 
// })


// Asynchrounous Callback
// function getcheese(callback) {
//     setTimeout(()=>{
//     const cheese = "🧀";
//     console.log("cheese" , cheese);
//     callback(cheese);
//     },2000);
// }


// function makeDough(cheese, callback){
//     setTimeout( ()=>{
//     const dough = cheese + "🍩";
//    console.log("here is the dough", dough);    
// }, 2000)
// }

// getcheese((cheese)=>{
//     makeDough(cheese, (dough) =>{
//         console.log("got my dough", dough);
//     });
// });



// pizza -> dough -> cheese (all details are depended on each other)




// Promises

// const ticket = new Promise(function(resolve, reject){
//     const isBoarded = true;
//     if(isBoarded){
//         resolve('your ticket confirmed');
//     }
// else{
//     reject('ticket cancelled');
// }
// })


// ticket.then((data)=>{
    // console.log('woho...',data);
// }).catch((data)=>{
//     console.log('oh no...',data);
// }).finally(()=>{
//     console.log('Always exceuted');
// });


// get pizza by promises

// function getCheese(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const cheese = "🧀";
//             resolve(cheese)
//         }, 2000);
//     });
//   }
 
// function makeDough(cheese){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const dough = cheese+"🍩";
//             resolve(dough)
//         }, 2000);
//     });
//   }

// function bakepizza(dough){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const pizza = dough+"🍕";
//             resolve(pizza)
//         }, 2000);
//     });
//   }

//   then() catch() finally()

//   getCheese()
//   .then((cheese)=>{
//     console.log("here is the cheese", cheese);
//     return makeDough(cheese);
//   })
//   .then((dough)=>{
//     console.log("here is your dough", dough);
//     return bakepizza(dough);
//   })
//   .then((pizza)=>{
//     console.log("here is your pizza ready", pizza);
//   })
//   .catch((data)=>{
//     console.log("Error occured at", data);
//   })
//   .finally( ()=>{
//     console.log("Finally proccess completed")
//   })

  
// promises using Async and await -->> best way... 

//   async function orderPizza (){
//     try{
//  const cheese = await getCheese();
//  console.log("here is the cheese", cheese);

//  const dough = await makeDough(cheese);
//  console.log("here is your dough", dough);

//  const pizza = await bakepizza(dough);
//  console.log("here is your pizza ready", pizza);

//   } catch(err){
//     console.log("error occured", err);
//   }

//   console.log("Proccess completed");
//   }

//   orderPizza();

// // fetch method 
// console.log("Hello, GOod Morning!!!");
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>console.log(res.json()))
// .then((data)=>console.log(data));


// const data = {
//     tittle: "This is title",
//     body: "This is post body ",
//     userId:2 
// }


// fetch("https://jsonplaceholder.typicode.com/users/posts", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//         "Content-type": "application/json",
//     },
// })
// .then((res)=> res.json())
// .then((data) => console.log(data));


// Desructuring 
// Arrays

// let arr =[3,5];
// let[a,b]=arr;
// console.log(a,b);


// let arr1 =[3,5,9,8,7];
// let [c,d,...rest] = arr1;
// console.log(c,d,...rest);


// let arr2 =[3,5,9,8,7];
// let [e, , ,...next] = arr2;
// console.log(e,...next);





// Spread Operators-> change element to object

// const arr = [1,3,5];
// let object = {...arr}
// console.log(object);

// function sum(n1,n2,n3) {
// return n1+n2+n3;    
// }

// console.log(sum(...arr));

// let obj = {
//     name: "Parth",
//     company: "XYZ",
//     address: "ABC"
// }

// console.log({...obj,name:"Harish"}) //edited

// -------------------------------------------------------------------------------------------------------------



























// coldcoffee using promises
function getColdMilk(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const milk ="🥛";
            resolve(milk);
        },2000);   
    });
}

function mixCoffee(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           const coffee = "🌱";
           resolve (coffee);
        },2000);
    });
}

function readycoldCoffee(){
return new Promise((resolve, reject) =>{
    setTimeout(() => {
        const coldCoffee = "☕";
        resolve(coldCoffee);
    }, 2000);
 });
}

// promises using Async and await -->>  

async function makeColdCoffee(){
try{
    const milk = await getColdMilk();
    console.log("Milk is ready", milk);

    const coffee = await mixCoffee();
    console.log("Mix coffee in milk", coffee);

    const coldCoffee = await readycoldCoffee();
    console.log("Your Cold Cold Coffe is ready", coldCoffee);
}
catch(err){
        console.log("Error occurred while making Cold coffee");
    }
}

makeColdCoffee();


