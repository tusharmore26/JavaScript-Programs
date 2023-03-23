arr=[12,23,5,678,4,23,12,54]
console.log(arr)

// length of an array
console.log(arr.length)

// toString() method converts array into string
console.log(arr.toString())

// join() methd
console.log(arr.join(' and '))

// pop() method
arr.pop();
console.log(arr)

// push() method
arr.push(100)
console.log(arr)

// shift() method
arr.shift()
console.log(arr)

// unshift() method
arr.unshift(200)
console.log(arr)

// concate() method
arr2=[1,2,3,4,5,6]
console.log(arr.concat(arr2))

// splice() method
newarr=[10,20,30,40,50,60]
deletes=newarr.splice(1,3,70,80,90,100)
console.log(newarr)
console.log(deletes) //returns the deleted items

// slice() method
newarr.splice(1,4)
console.log(newarr)

// delete() method
console.log(arr)
console.log(arr.length)
delete arr[0]
console.log(arr)
console.log(arr.length) //length of array remains same after delete operation