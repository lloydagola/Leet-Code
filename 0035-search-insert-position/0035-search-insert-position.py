class Solution(object):
    def search_helper(_, nums, target, mid_index):
        mid_number = nums[mid_index]
        
        print("mid_index", mid_index)
        
        if mid_number > target:
            return "LEFT"
        elif mid_number < target:
            return "RIGHT"
        elif mid_number == target:
            return "FOUND"       

    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        low, high = 0, len(nums) -1
        
        while(low <= high):
            mid_index = (low + high) // 2
            
            result = self.search_helper(nums, target, mid_index)
            if result == "LEFT":
                high = mid_index - 1
            elif result == "RIGHT":\
                low = mid_index + 1
            elif result == "FOUND":
                return mid_index
            else:
                print("mid_index", mid_index)
                return -1
            
        return low
        
        



#return index of insert position if not found
        