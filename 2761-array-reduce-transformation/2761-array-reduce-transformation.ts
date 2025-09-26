type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let sum = init;
    for(let i = 0; i < nums.length; i++){
        //transform the array
        sum = fn(sum, nums[i]);    
    };
    
    return sum;
};