let arr=[21,43,779,09,45,32]
console.log(arr)

// another method of creating an arrat
let a=new Array(5,4);
console.log(a)

let b=new Array(5) //this declaration creates an array of length 5 here 5 is not an element
b[0]="Pune"
b[1]="Mumbai"
b[2]="Solapur"
b[3]="Delhi"
b[4]="Bengalore"
console.log(b)

// accessing an array
console.log(b[3])
console.log(arr[2])
console.log(a[4]) //it will return "undefined" beacase array 'a' contains only 2 element

// length of an array
console.log(arr.length)

// typeof array
console.log(typeof arr) //it shows object
console.log(Array.isArray(arr)) //it return true if a variable is an array

// looping through an array
// for loop
for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

// while loop
i=0;
while(i<=b.length){
    console.log(b[i])
    i++
}