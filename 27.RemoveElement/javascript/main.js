/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	nums.sort((a, b) => a - b);
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
	return { k: k, nums: nums };
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
