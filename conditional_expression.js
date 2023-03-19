// If_else Statement
// let a=prompt("Enter your age:");
let a=21
if(a>0){
    console.log("This is valid age.")
}
else{
    console.log("This age is not valid")
}


// nested if_else

per = 87;
if(per>=75){
    console.log("Distinction")
}
else if(per>=60 && per<75){
    console.log("First Class")
}
else if(per>=45 && per<60){
    console.log("second class")
}
else if(per>=35 && per<45){
    console.log("Third class")
}
else{
    console.log("Fail!!")
}

// ternary operator
num=20;
num=num%2==0? "Number is even":"Number is odd";
console.log(num)