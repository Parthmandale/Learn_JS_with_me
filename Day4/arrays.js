var friends=['bishal', 'parth', 'shubham'];

console.log(friends[1]);   

console.log(friends.length);

console.log(friends[friends.length-1])

// For in loop -> in means number of elements
var friends=['bishal', 'parth', 'shubham'];
for(let element in friends){ 
    console.log(element);
}

 // For of loop  -> of means names
for(let element of friends){ 
    console.log(element);
}


