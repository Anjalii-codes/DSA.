function search(nums, target) {
    let s =0
    let e = nums.length -1
    while(s<=e){
        let m =Math.floor(s+(e-s)/2)
        if(nums[m]==target){
            return m
        }
    // check whether left side is sorted or right side is sorted
        if(nums[s]<=nums[m]){
            if(nums[s]<=target && target<=nums[m]){ // means target lies under left side
                e=m-1

            }
            else{ // means lies right side
                s=m+1
            }
        }
        else{
            if(nums[m]<=target && nums[e]>=target){
                s=m+1
            }
            else{
                e=m-1
            }
        }

        }

    return -1
    
}
let nums = [4,5,6,7,0,1,2]
let target = 0
console.log(search(nums,target))