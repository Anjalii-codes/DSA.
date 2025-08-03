function ReverseInteger(n) {
    ncopy = n
    n = Math.abs(n)
    
    let rev = 0
    while (n > 0) {
        let rem = n % 10
        rev = (10 * rev) + rem
        n = Math.floor(n / 10)
        
    }
    let limit = 2 ** 31
    if (rev > limit || rev < -limit) {
        return 0
    }
    return ncopy<0? -rev : rev
    
}
let num = -956897;
let res = ReverseInteger(num);
console.log(res);
