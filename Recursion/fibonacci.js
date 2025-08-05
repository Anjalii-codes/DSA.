function fibonacci(n) {
    if (n <=1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = 5;
let res = fibonacci(n);
console.log(res);