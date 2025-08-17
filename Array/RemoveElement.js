function Remove_Element(nums, val) {
    let c=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==val){
            nums.splice(i,1)
            i-=1
        }
        else{
            c+=1
        }
    }
    return c
    
};
let result1 = Remove_Element([2,2,2,2,3,2],2)    
console.log(result1)