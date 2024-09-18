/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	nums.sort((a, b) => a - b);
	console.log(nums);
	//binary search for finding the number
	let start = 0;
	let k = nums.length;
	let end = nums.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] === val) {
			k -= 1;
			nums.splice(mid, 1);
		} else if (nums[mid] > val) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	if (nums.length == 1 && nums[0] == val) {
		nums.shift();
	}
	if (nums[nums.length - 1] === val) {
		let i = nums.length - 1;
		while (nums[i] === val) {
			nums.splice(nums.length - 1, 1);
			k--;
			i--;
		}
	}
	return { k: k, nums: nums };
};

console.log(removeElement([4, 3, 4, 4, 3, 2, 1, 0, 4, 1, 4, 4], 4));
