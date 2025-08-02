function Palindrome_Number(n) {
    let nCopy = n;

    let rev = 0;
    if (n < 0) {
        return false;
    }
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);
        
    }
    return nCopy === rev;
}
let num = 121
let res = Palindrome_Number(num)
if (res === true) {
    console.log("Palindrome Number")
    }
else {
    console.log("it is not a palindrome number")

    }


