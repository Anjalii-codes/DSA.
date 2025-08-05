function SingleNumber(nums) {
    let n = nums.length;
    let xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= nums[i];
    }
    return xor;
}   
let nums = [4, 1, 2, 1, 2];
console.log(SingleNumber(nums));