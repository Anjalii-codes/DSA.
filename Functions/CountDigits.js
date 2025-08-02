function CountDigits(n) {
    if (n == 0) return 1;
    n = Math.abs(n)
    let count = 0 
    
    while (n > 0) {
        n = Math.floor(n / 10)
        count+=1
        
    }
    return count
    
}
let n = -7896;
let res = CountDigits(n);
console.log(res)