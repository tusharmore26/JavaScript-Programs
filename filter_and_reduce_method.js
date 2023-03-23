
// filter() method
arr=[21,132,4,5,6,2,12,43]
a=arr.filter((a)=>{
    return a<10
})
console.log(a)

b=arr.filter(function myfun(a){
    return a%2!=0;
})
console.log(b)


// reduce()
c=arr.reduce((a,b)=>{
    return a+b;
})
console.log(c)

