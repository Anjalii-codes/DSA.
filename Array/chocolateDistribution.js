let arr = [3, 4, 1, 9, 5, 6, 7, 9,  2];
arr.sort();
let i = 0;
let m=5
let diff= Infinity
let j = i + (m - 1);
while (j < arr.length) {
    if (arr[j] - arr[i] < diff) {
        diff = arr[j] - arr[i];
    }
    i++;
    j++;
}
console.log(diff)