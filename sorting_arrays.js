arr=["Pune","Mumbai","Solapur","Bengalore","Delhi","Chennai"]
console.log("Array before sorting: ",arr)

arr.sort()
console.log("Arrys after sorting: ",arr)

// sort method sorts the array in alphabetical order
// if the array contains numeric values then the sort method will not be usefull 

// so for sorting the array of numeric elements compare function is used as follows:

newarr=[46,24,687,232,668,0,2325,787,10]
console.log("Array before sorting: ",newarr)
newarr.sort(function compare(a,b){
    return a-b;
})
console.log("Array after sorting: ",newarr)

// sorting an array in reverse order
function reverse(a,b){
    return b-a;
}
newarr.sort(reverse)
console.log("Sorting array in reverse oreder: ",newarr)