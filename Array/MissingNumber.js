function Missing_Number(nums) {
    let n=nums.length
    let s=n*(n+1)/2
    let d=0
    for(let i= 0; i< n ;i++){
        d+=nums[i]


    }
    return s - d

}
let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
console.log(Missing_Number(nums))
