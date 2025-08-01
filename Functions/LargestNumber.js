function LargestNumber(arr) {
    let len = arr.length
    let max=-Infinity;

    for (let i = 0; i < len; i++){
        if (arr[i] > max) {
            max=arr[i]
        }

    }
    return max

}
let arr = [96, 58, 64, 96, 98, 74, 700, 96, 9, 78, 856, 798, 9280123]
let res = LargestNumber(arr)
console.log(`Largest Number is ${res}`)
