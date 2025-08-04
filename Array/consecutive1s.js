function findMaxConsecutiveOnes(nums) {
    let c= 0
    let mazCount=0
    for(let i =0 ; i< nums.length;i++){
        if(nums[i]===1){
            c+=1
        }
        else{
            mazCount=Math.max(mazCount,c)
            c=0
        }


    }
    return Math.max(mazCount,c)

    
};
let nums = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(nums))