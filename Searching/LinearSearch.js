function LinearSearch(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i
        }
    }
    return -1
}

let arr = [10, 20, 31, 40, 50, 60, 7, 80, 90, 100];
console.log(LinearSearch(arr, 31));