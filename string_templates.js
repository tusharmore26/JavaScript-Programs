// Template Literals use back-ticks (``) rather than the quotes ("") to define a string

// with templates we can easily add "",'',and / in the string

str=`Hii, I am "Tushar"`
console.log(str)

// we can also add variables in the string
age=21
date='26-07-2002'
str2=`Hii, I am "Tushar", my age is ${age} and date of birth is ${date}`
console.log(str2)

// mathematics operations using templates
let a=20;
let b=30;

let add=`Addition = ${a+b}`
console.log(add)
console.log(`Subtraction = ${a-b}`)