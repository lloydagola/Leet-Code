class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        if n <= 1:
            return n
    
        prev1, prev2 = 0, 1

        nth = 0

        for _ in range(n - 1):
            nth = prev1 + prev2
            prev1 = prev2
            prev2 = nth

        return nth

        