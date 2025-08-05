function BinarySearch(arr, element) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == element) {
            return mid;
        }
        else if (arr[mid] < element) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}

let arr = [10, 20, 31, 40, 50, 60, 7, 80, 90, 100];
console.log(BinarySearch(arr, 31));