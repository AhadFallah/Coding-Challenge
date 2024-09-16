
class Solution:
    def merge(self,nums1:list[int], m:int,nums2:list[int],n:int):
        nums1.sort()
        nums2.sort()
        while(len(nums1)!= m):
            nums1.remove(0) 
        while(len(nums2)!= n):
            nums2.remove(2) 
        if(nums2):
            nums1.extend(nums2)
        nums1.sort()
Solution().merge([1,2,3,0,0],3,[2,3,4],3);
