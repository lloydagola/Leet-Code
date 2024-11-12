class Solution(object):
    def missingNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        actual_sum = 0
        n = len(nums)
        
        for num in nums:
            actual_sum += num
            
        expected_sum = (n * (n+1)) // 2
            
        return expected_sum - actual_sum
        