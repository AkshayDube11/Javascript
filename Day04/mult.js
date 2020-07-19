let a = "fizz";
let b = "buzz";
let i = +prompt("Enter the number of your choice:" );
while (i===100){
    i = i+1;
}
if (i%3==0 && i%5==0){
    console.log(a+b);
}
else if (i%3==0){
    console.log(a);
}
else if (i%5==0){
    console.log(b);
}
else{
    console.log("The entered number is untracable.")
}
   