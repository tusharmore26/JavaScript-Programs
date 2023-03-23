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

// spice() method
arr.splice(0,3, "Tushar","Pune")
console.log(arr)

// slice() method
arr.slice(0,3)
console.log(arr.slice("Tushar"))