for(i=0;i<10;i++){
    console.log(i)
}

// program to calculate factorial of a given number
n=5;
sum=1
for(i=1;i<=n;i++)
{
    sum *= i;
}
console.log("Factorial of "+n+" is:"+sum)

// for_in lopp
str="Tushar";
for(let x in str){
    console.log(str[x])
}

n=[12,34,5,6,7,3,2]
for(x in n){
    console.log(n[x])
}

obj={fname:"Tushar",lname:"More",age:21}
for(x in obj){
    console.log(x)
    console.log(obj[x])
}

// for_of loop
arr=[21,43,65,86,97,34]
for(x of arr){
    console.log(x)
}

// obj2={fname:"Ajay",lname:"more",age:23}
// for(x of obj2){
//     console.log(obj2[x])
// }

str2="Welcome"
for(x of str2){
    console.log(x)
}