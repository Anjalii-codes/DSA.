function sortArray (nums) {
    if(nums.length<=1){
        return nums
    }
    let m = Math.floor(nums.length/2)
    let left= sortArray(nums.slice(0,m))
    let right= sortArray(nums.slice(m))
    return merge(left,right)
    
};
function merge(left,right){
    let res=[]
    let i=0
    let j=0
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i])
            i+=1
        }
        else{
            res.push(right[j])
            j+=1

        }
    }
    return [...res,...left.slice(i),...right.slice(j)]
}
let nums = [5,2,4,1]
let res = sortArray(nums)
console.log(res)