// n- length of an array
function sum(n) {
    if (n == 0) {
        return arr[0]
    }
    return arr[n]+sum(n-1)
    
}
let arr = [1, 2, 1, 4, 5, 6,];
console.log(sum(5))