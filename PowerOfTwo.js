function isPowerOfTwo(n) {
    if (n == 0) {
        return 1
    }
    else if (n == 1) {
        return 2
    }
    let m = Math.floor(n / 2) 
    let val = isPowerOfTwo(m) 
    let res = val * val
    if (n % 2 !== 0) {
        return p*res
    }
    return res
}
let n = 2
let res = isPowerOfTwo(n)
console.log(res);
