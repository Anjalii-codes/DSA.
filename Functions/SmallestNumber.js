function SmallestNumber(arr) {
    let len = arr.length
    let min=Infinity;

    for (let i = 0; i < len; i++){
        if (arr[i] < min) {
            min=arr[i]
        }

    }
    return min

}
let arr = [96, 58, 64, 96, 98, 74, 700, 96, 9, 78, 856, 798, 9280123]
let res = SmallestNumber(arr)
console.log(`Smallest Number is ${res}`)
