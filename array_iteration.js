// forEach() method
// The forEach() method calls a function (a callback function) once for each array element
arr=[21,43,54,76,9,23,12,98,100]
arr.forEach((value)=>{
    console.log(value)
})

arr.forEach(myfun)
function myfun(value,index){
    console.log(value,index)
}


// map() method
// The map() method creates a new array by performing a function on each array element.
let a=arr.map(fun)
function fun(value){
    return value*2;
}
console.log(a)
console.log(arr) //it does not change the original array.

arr.map((value,index,array)=>{
    console.log(value,index,array)
})


// every() method
// The every() method checks if all array values pass a test.
arr.every((value)=>{
    console.log(value>10)
})


// some() method
// The some() method checks if some array values pass a test.
arr.some((value)=>{
    console.log( value >10)
})
