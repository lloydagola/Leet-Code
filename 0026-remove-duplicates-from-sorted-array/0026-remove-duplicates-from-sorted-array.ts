function removeDuplicates(nums: number[]): number {
     // Step 1: Handle edge case where the array is empty or has only one element
  if (nums.length <= 1) {
    return nums.length;
  }

  // Step 2: Initialize two pointers
  let slowPointer = 0; // Points to the last unique element
  for (let fastPointer = 1; fastPointer < nums.length; fastPointer++) {
    // Step 3: Compare the current element with the next element
    if (nums[fastPointer] !== nums[slowPointer]) {
      // If they are different, increment slowPointer and update the value
      slowPointer++;
      nums[slowPointer] = nums[fastPointer];
    }
    // If they are the same, continue to the next iteration
  }

  // Step 4: The length of the modified array (up to slowPointer + 1) is the answer
  return slowPointer + 1;
};