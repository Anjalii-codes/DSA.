

function merge(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            nums1[k++] = nums1[i++];
        } else {
            nums1[k++] = nums2[j++];
        }
    }
    while (i < m) {
        nums1[k++] = nums1[i++];
    }
    while (j < n) {
        nums1[k++] = nums2[j++];
    }
    return nums1;
}

let nums1 = [1, 2, 6, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

let res = merge(nums1, m, nums2, n);
console.log(res);