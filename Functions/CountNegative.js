function CountNegatives(arr) {
    let c=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <0) {
            c+=1

        }
    }
    return c 

}
let arr = [12,-47, -89, 1, 56, 90, 4, 7, 1, 20]
let result = CountNegatives(arr)
console.log(`Negative Count is ${result}`)
