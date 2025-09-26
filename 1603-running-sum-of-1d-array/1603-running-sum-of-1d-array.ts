function runningSum(nums: number[]): number[] {

    for(let i = 0; i < nums.length - 1; i++){
        nums[i+1] = nums[i] + nums[i+1]
    }
    
    return nums
};