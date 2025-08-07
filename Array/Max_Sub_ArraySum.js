// kadane's algorithm
let arr = [3, -4, 5, 4, -1, 7, -8];
let max_s = -Infinity
let n = arr.length
let cur_sum = 0
for (let i = 0; i < n; i++){
    cur_sum += arr[i]
    if (max_s < cur_sum) {
        max_s = cur_sum
        
    }
    if (cur_sum < 0) {
        cur_sum = 0
        
    }
}
console.log(max_s)




// brute force
// let arr = [3, -4, 5, 4, -1, 7, -8];
// let max_s= -Infinity
// for (let s = 0; s < arr.length; s++){
//     let cur_sum =0

//     for (let e = s; e < arr.length; e++){
//         cur_sum += arr[e]
//         if (cur_sum > max_s) {
//             max_s= cur_sum
//         }
        

//     }
// }
// console.log(max_s)