var area = "circle";
var Pi =3.14, l=5, b=6, r=5;
if(area=="circle"){
    console.log("area of circle is = " + Pi*r**2);
}
else if (area == "rect"){
    console.log("area of rect is = " + l*b);
}
else if( area =="tri"){
    console.log("area of tri is = " + (l*b)/2);
}
else{
    console.log("wrong input");
}  