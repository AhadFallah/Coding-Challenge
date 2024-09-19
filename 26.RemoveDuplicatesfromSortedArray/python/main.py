class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        list2=[]
        k=0
        for i in nums:
            if self.is_exist(list2,i)==False:
                list2.append(i)
                k+=1
        nums=list2 
        return nums
    def is_exist(self,nums:list[int],number:int)->bool:
        nums.sort()
        start=0
        end=len(nums)-1
        while(start<=end):
            mid=int((start+end)/2)
            if(nums[mid]==number):
                return True
            elif(nums[mid]>number):
                end=mid-1
            else:
                start=mid+1
        return False

print(Solution().removeDuplicates([0,0,1,1,1,2,2,3,3,4]));        
