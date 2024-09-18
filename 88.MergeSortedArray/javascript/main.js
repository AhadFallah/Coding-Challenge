/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);

	let c = 0;
	while (nums1.length != m) {
		if (nums1[c] !== 0) {
			c++;
		} else {
			nums1.splice(c, 1);
		}
	}

	let b = 0;
	while (nums2.length != n) {
		if (nums2[b] !== 0) {
			b++;
		} else {
			nums2.splice(b, 1);
		}
	}
	for (var i = 0; i < n; i++) {
		nums1.push(nums2[i]);
	}

	nums1.sort((a, b) => a - b);
	console.log(nums1);
};

merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], (n = 2));
