function Remove_duplicates(nums) {
    let x=0
    for(let i=0; i<nums.length;i++){
        if(nums[i]>nums[x]){
            x+=1
            nums[x]=nums[i]

        }
    }
    return x+1

    

}
nums = [0,0,1,1,1,2,2,3,3,4,5,6]
console.log(Remove_duplicates(nums))