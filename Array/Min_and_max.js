let arr = [2, 0, 6, 3, 5,  1];
let min;
let max;
let i;
let n = arr.length;
if (n % 2 == 0) {
    if(arr[0] > arr[1]){
        min = arr[1]
        max = arr[0]
    }
    else {
        min = arr[0]
        max = arr[1]

    }
    i = 2

}
else {
    min = arr[0]
    max = arr[0]
    i = 1
}
while (i < n - 1) {
    if (arr[i] < arr[i + 1]) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i + 1] > max) {
            max = arr[i + 1];
        }
    }
    else {
        if (arr[i + 1] < min) {
            min = arr[i + 1];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
            
            
    }
    i+=2


    
}
console.log(min, max)