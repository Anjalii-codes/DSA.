
let arr = [5, 2, 4, 1]
for (let i = 0; i < arr.length; i++){ 
    for (let j = 0; j < arr.length - i; j++){
        if (arr[j] > arr[j + 1]) {
            let t=arr[j]
            arr[j] = arr[j + 1]
            arr[j+1]=t
        }
    
    
}
}
console.log(arr)