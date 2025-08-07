let arr = [ 6, 5, 1, 4, 8, 9];
let i = 0;
let end = arr.length - 1;
while (i <= end) {
    let t = arr[i]
    arr[i] = arr[end]
    arr[end] = t
    i++
    end--
}
console.log(arr)
