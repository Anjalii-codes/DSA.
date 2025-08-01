function SecondLargest(arr) {
    let firstmax = -Infinity
    let Secondmax = -Infinity

    let len = arr.length
    if (len < 2) {
        console.log("Array should have aleast two elements")
    }
    for (let i = 0; i < len; i++){
        if (arr[i] > firstmax) {
            Secondmax = firstmax
            firstmax = arr[i]

        }
        else if(arr[i] > Secondmax && arr[i]!== firstmax){
            Secondmax = arr[i]

        }


    }
  return Secondmax === -Infinity ? "No second largest found" : Secondmax;



}
let arr = [ 9280123, 9280123, 928123, 9280123]
let res = SecondLargest(arr)
console.log(`SecondcLargest Number is ${res}`)
