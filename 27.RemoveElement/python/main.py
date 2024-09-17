class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        nums.sort()
        start=0
        k=len(nums)
        end=len(nums)-1
        while(start<=end):
            mid=int((start+end)/2)
            if(nums[mid]==val):
                k-=1
                nums.pop(mid)
                end = len(nums) - 1  # Update the `end` pointer after removal
            elif(nums[mid]>val):
                end=mid-1
            else:
                start=mid+1
        return nums


print(Solution().removeElement([3,2,2,3],3))        
