arr=[21,43,578,980,4]
arr.map((value,index,array)=>{
    console.log(value,index,array)
})

// creating array with new map() method
arr2=new Map();


// inserting items with set() metho
arr2.set("Apple",500)
arr2.set("WaterMelon",300)
arr2.set("Banana",400)
arr2.set("Mango",900)
arr2.get("Apple")

arr.map((value,index)=>{
    console.log(value,index)
})

// get() method
console.log(arr2.get("Apple"))

// delete() method
arr2.delete("Banana")
console.log(arr2)

// has() method
console.log(arr2.has("Apple"))
console.log(arr2.has("Banana"))

