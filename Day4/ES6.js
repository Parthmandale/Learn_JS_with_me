// var =>  function scope

function biodata(){
    var myName="parth";
    console.log(myName);
    if(true){
        var lastname="Mandale";
        console.log("inner"+lastname);
        console.log("inner"+myName);
    }
    console.log("innerOuter"+lastname);
}
biodata();
console.log(myName);   //error becoz of function

// let => block scope

function biodata(){
    let myName="parth";
    console.log(myName);
    if(true){
        let lastname="Mandale";
        console.log("inner"+lastname);
        console.log("inner"+myName);
    }
   console.log("innerOuter"+lastname);   //out of block it is defined -->> Error
}
biodata();
 console.log(myName);    //out of block it is defined -->> Error


 // const => block scope

 function biodata(){
    const myName="parth";
    console.log(myName);
    if(true){
       const lastname="Mandale";
        console.log("inner"+lastname);
        console.log("inner"+myName);
    }
   console.log("innerOuter"+lastname);   //out of block it is defined -->> Error
}
biodata();
  console.log(myName);      //out of block it is defined -->> Error